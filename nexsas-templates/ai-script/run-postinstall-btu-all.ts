#!/usr/bin/env node

import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Script to run "tsx folder-rename.ts --btu" (postinstall command) in all projects without installing dependencies
 */

const workspaceRoot = __dirname;

interface ProjectInfo {
  name: string;
  path: string;
}

/**
 * Find all project directories (those with package.json and folder-rename.ts)
 */
function findProjects(): ProjectInfo[] {
  const projects: ProjectInfo[] = [];
  const entries = fs.readdirSync(workspaceRoot, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
      const projectPath = path.join(workspaceRoot, entry.name);
      const packageJsonPath = path.join(projectPath, 'package.json');
      const folderRenamePath = path.join(projectPath, 'folder-rename.ts');

      // Only include projects that have both package.json and folder-rename.ts
      if (fs.existsSync(packageJsonPath) && fs.existsSync(folderRenamePath)) {
        projects.push({
          name: entry.name,
          path: projectPath,
        });
      }
    }
  }

  return projects;
}

/**
 * Run folder-rename.ts --btu in a project
 */
function runPostinstallBtu(project: ProjectInfo): boolean {
  try {
    // Use npx tsx which will work without installing dependencies
    // This is equivalent to running: tsx folder-rename.ts --btu
    const command = `npx --yes tsx folder-rename.ts --btu`;
    
    execSync(command, {
      cwd: project.path,
      stdio: 'inherit',
      env: {
        ...process.env,
        SILENT_RENAME: 'true', // Make it silent
      },
    });

    return true;
  } catch (error: any) {
    if (error.status !== undefined) {
      // Command failed with non-zero exit code
      console.log(`  ⚠️  Command failed (exit code: ${error.status})`);
    } else {
      console.error(`  ❌ Error:`, error.message || String(error));
    }
    return false;
  }
}

/**
 * Main execution
 */
async function main(): Promise<void> {
  console.log(`🚀 Running postinstall command "tsx folder-rename.ts --btu" in all projects...\n`);

  const projects = findProjects();
  
  if (projects.length === 0) {
    console.log('❌ No projects found with folder-rename.ts.');
    console.log('   Make sure folder-rename.ts exists in each project.');
    process.exit(1);
  }

  console.log(`📁 Found ${projects.length} project(s)\n`);

  let successCount = 0;
  let errorCount = 0;

  for (const project of projects) {
    console.log(`Processing: ${project.name}...`);
    
    const result = runPostinstallBtu(project);
    
    if (result) {
      successCount++;
      console.log(`  ✅ ${project.name} - Complete\n`);
    } else {
      errorCount++;
      console.log(`  ❌ ${project.name} - Failed\n`);
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`  ✅ Successfully processed: ${successCount}`);
  console.log(`  ❌ Failed: ${errorCount}`);
  console.log(`  📁 Total projects: ${projects.length}`);
  
  if (errorCount > 0) {
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('❌ Error:', error);
  process.exit(1);
});
