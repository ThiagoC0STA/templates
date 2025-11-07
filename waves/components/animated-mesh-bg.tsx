"use client"

export function AnimatedMeshBg() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-background">
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="mesh" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0,50 Q25,25 50,50 T100,50" stroke="rgba(255,199,0,0.1)" strokeWidth="1" fill="none" />
            <path d="M50,0 Q75,25 50,50 T50,100" stroke="rgba(255,199,0,0.1)" strokeWidth="1" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mesh)" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/3 rounded-full filter blur-3xl" />
    </div>
  )
}
