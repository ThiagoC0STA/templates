"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { MOCK_BEATS } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import {
  Mic,
  Video,
  Square,
  Play,
  Pause,
  Download,
  Upload,
  Volume2,
  VolumeX,
  RotateCcw,
  Share2,
  Sparkles,
  Clock,
  Headphones,
  Activity,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

interface RecordingBoothProps {
  beatId?: string
}

const defaultBeat = {
  id: "1",
  title: "Midnight Hustle",
  producer: "TriuneBeats",
  bpm: 140,
  key: "C Minor",
  duration: "03:24",
  tags: ["Trap", "Dark", "Aggressive"],
  plays: 1523,
}

export function RecordingBooth({ beatId }: RecordingBoothProps) {
  const [recordingMode, setRecordingMode] = useState<"audio" | "video">("audio")
  const [isRecording, setIsRecording] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [hasRecording, setHasRecording] = useState(false)
  const [beatVolume, setBeatVolume] = useState([75])
  const [micVolume, setMicVolume] = useState([100])
  const [isBeatPlaying, setIsBeatPlaying] = useState(false)
  const [isBeatMuted, setIsBeatMuted] = useState(false)
  const [countIn, setCountIn] = useState(true)
  const [metronomeEnabled, setMetronomeEnabled] = useState(false)
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(true)
  const [focusMode, setFocusMode] = useState(false)
  const [lyricNotes, setLyricNotes] = useState(
    "Hook idea:\nWe been running up the score, whole city on my back\nMidnight hustles on repeat, never slipping off the track.\n\nVerse punch-in:\nKeep the cadence tight, lean into the off-beats and let the ad-libs breathe.",
  )

  const videoRef = useRef<HTMLVideoElement>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const beatFromLibrary = MOCK_BEATS.find((candidate) => candidate.id === beatId)
  const beat = {
    ...defaultBeat,
    ...beatFromLibrary,
  }

  const recommendedBeats =
    MOCK_BEATS.filter((candidate) => candidate.genre === beat.genre && candidate.id !== beat.id).slice(0, 3) ??
    []
  const relatedBeats =
    recommendedBeats.length > 0
      ? recommendedBeats
      : MOCK_BEATS.filter((candidate) => candidate.id !== beat.id).slice(0, 3)

  const sessionStats = [
    { label: "BPM", value: `${beat.bpm}` },
    { label: "Key", value: beat.key },
    { label: "Duration", value: beat.duration ?? "03:12" },
    { label: "Streams", value: beat.plays?.toLocaleString() ?? "—" },
  ]

  const sessionTakes = [
    {
      id: "take-4",
      title: "Take 4 • Hook punch-in",
      note: "Best energy on bar 8, keep this as primary",
      length: "02:58",
      status: "Selected",
    },
    {
      id: "take-3",
      title: "Take 3 • Verse B",
      note: "Great pocket, needs de-esser on words ending with S",
      length: "02:41",
      status: "Review",
    },
    {
      id: "take-2",
      title: "Take 2 • Verse A",
      note: "Keep ad-lib idea from 0:55, re-cut first four bars",
      length: "03:01",
      status: "Alt",
    },
    {
      id: "take-1",
      title: "Take 1 • Warm-up",
      note: "Use as reference only, levels too hot",
      length: "02:36",
      status: "Archived",
    },
  ]

  const warmupPrompts = [
    "Hum the root note for 8 counts, then slide into falsetto.",
    "Practice the hook on 70% tempo to lock in cadences.",
    "Record 4 bars of ad-lib ideas before every take.",
    "Hydrate and reset gain before each punch-in.",
  ]

  const shortcuts = [
    { keys: "Space", action: "Start / pause recording" },
    { keys: "Shift + Space", action: "Drop a marker" },
    { keys: "R", action: "Arm track & rewind to last marker" },
    { keys: "Ctrl + S", action: "Save take to library" },
  ]

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop())
      }
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  const startRecording = async () => {
    try {
      const constraints = {
        audio: true,
        video: recordingMode === "video",
      }

      const stream = await navigator.mediaDevices.getUserMedia(constraints)
      streamRef.current = stream

      if (recordingMode === "video" && videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
      }

      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder

      const chunks: BlobPart[] = []
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data)
        }
      }

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, {
          type: recordingMode === "video" ? "video/webm" : "audio/webm",
        })
        console.log("[booth] Recording saved:", blob)
        setHasRecording(true)
      }

      mediaRecorder.start()
      setIsRecording(true)
      setIsBeatPlaying(true)

      timerRef.current = setInterval(() => {
        setRecordingTime((previous) => previous + 1)
      }, 1000)
    } catch (error) {
      console.error("[booth] Error accessing media devices:", error)
      alert("We could not access your microphone or camera. Please verify permissions and try again.")
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
      setIsBeatPlaying(false)

      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop())
      }

      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }

  const pauseRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      if (isPaused) {
        mediaRecorderRef.current.resume()
        setIsPaused(false)
        setIsBeatPlaying(true)
      } else {
        mediaRecorderRef.current.pause()
        setIsPaused(true)
        setIsBeatPlaying(false)
      }
    }
  }

  const resetRecording = () => {
    setRecordingTime(0)
    setHasRecording(false)
    setIsRecording(false)
    setIsPaused(false)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-16 pt-12">
      <header className="rounded-3xl border border-border/40 bg-gradient-to-br from-purple-600/10 via-background to-orange-500/10 p-6 shadow-lg shadow-purple-950/5 backdrop-blur">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4">
            <Badge variant="secondary" className="rounded-full border border-purple-400/40 bg-purple-500/15 text-xs uppercase tracking-[0.3em] text-purple-200">
              Virtual booth
            </Badge>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Lay down your take for {beat.title}
              </h1>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                This booth is pre-loaded with {beat.producer}&rsquo;s instrumentation. Capture fresh ideas, punch in
                verses, and export studio-ready stems without leaving the browser.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {sessionStats.map((stat) => (
                <span
                  key={stat.label}
                  className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-200"
                >
                  <Clock className="h-3.5 w-3.5 text-purple-300" />
                  <span className="uppercase tracking-[0.2em] text-purple-300">{stat.label}</span>
                  <span className="text-sm font-semibold text-white">{stat.value}</span>
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {(beat.tags ?? defaultBeat.tags).map((tag) => (
                <Badge key={tag} variant="outline" className="border-purple-500/40 text-purple-200">
                  #{tag.toLowerCase()}
                </Badge>
              ))}
            </div>
          </div>
          <Card className="w-full max-w-xs border-border/30 bg-background/80 backdrop-blur">
            <CardHeader className="pb-3">
              <CardDescription>Session status</CardDescription>
              <CardTitle className="text-lg">Booth ready</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>{countIn ? "4-bar count-in active" : "Count-in disabled"}</span>
                <Badge variant="outline" className="border-purple-400/40 text-purple-200">
                  {focusMode ? "Focus mode" : "Standard"}
                </Badge>
              </div>
              <div className="rounded-2xl border border-border/30 bg-muted/20 p-3 text-xs">
                Auto-save {autoSaveEnabled ? "enabled — takes stored in cloud library." : "disabled — remember to export."}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2 border-t border-border/20 py-4">
              <Button variant="outline" asChild className="w-full border-purple-400/50 text-purple-300 hover:bg-purple-500/10">
                <Link href="/results">Swap beat</Link>
              </Button>
              <Button asChild className="w-full bg-purple-500 hover:bg-purple-600">
                <Link href={`/booth/${beat.id}`}>Reload booth</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </header>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,2.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-6">
          <Card
            className={`overflow-hidden border-border/40 bg-background/95 shadow-md transition ${
              focusMode ? "ring-2 ring-purple-400/60" : ""
            }`}
          >
            <div className="relative aspect-video bg-gradient-to-br from-purple-500/10 via-background to-orange-500/10">
              {recordingMode === "video" ? (
                <video
                  ref={videoRef}
                  className="h-full w-full object-cover"
                  muted
                  playsInline
                  style={{ display: isRecording || hasRecording ? "block" : "none" }}
                />
              ) : null}

              {!isRecording && !hasRecording && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-purple-500/15">
                    {recordingMode === "video" ? (
                      <Video className="h-12 w-12 text-purple-300" />
                    ) : (
                      <Mic className="h-12 w-12 text-purple-300" />
                    )}
                  </div>
                  <p className="text-lg font-semibold text-foreground">Ready when you are</p>
                  <p className="text-sm text-muted-foreground">
                    {recordingMode === "video"
                      ? "Capture video + audio directly from your browser."
                      : "Audio-only capture with room-friendly metering."}
                  </p>
                </div>
              )}

              {isRecording && (
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-red-500" />
                  <Badge variant="destructive" className="font-mono">
                    REC {formatTime(recordingTime)}
                  </Badge>
                </div>
              )}

              <div className="absolute bottom-4 left-4 right-4">
                <Card className="border border-white/10 bg-black/60 p-3 text-white backdrop-blur-sm">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold leading-none">{beat.title}</p>
                      <p className="text-xs text-white/70">
                        Prod. {beat.producer} • {beat.bpm} BPM • {beat.key}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setIsBeatPlaying((previous) => !previous)}
                      className="flex items-center gap-2 rounded-full border border-white/20 px-3 text-white hover:bg-white/10"
                    >
                      {isBeatPlaying ? (
                        <>
                          <Pause className="h-4 w-4" />
                          Pause beat
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4" />
                          Play beat
                        </>
                      )}
                    </Button>
                  </div>
                </Card>
              </div>
            </div>

            <div className="border-t border-border p-6">
              <Tabs value={recordingMode} onValueChange={(value) => setRecordingMode(value as "audio" | "video")}>
                <TabsList className="mb-4 grid w-full grid-cols-2">
                  <TabsTrigger value="audio" disabled={isRecording}>
                    <Mic className="mr-2 h-4 w-4" />
                    Audio Only
                  </TabsTrigger>
                  <TabsTrigger value="video" disabled={isRecording}>
                    <Video className="mr-2 h-4 w-4" />
                    Audio + Video
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="audio" className="mb-6">
                  <div className="grid gap-3 rounded-2xl border border-border/30 bg-muted/20 p-4 text-xs text-muted-foreground sm:grid-cols-2">
                    <div>Auto level will balance vocals at -12 dBFS. Use the mic slider for fine tuning.</div>
                    <div>Enable metronome for reference clicks during verse entrances.</div>
                  </div>
                </TabsContent>
                <TabsContent value="video" className="mb-6">
                  <div className="grid gap-3 rounded-2xl border border-border/30 bg-muted/20 p-4 text-xs text-muted-foreground sm:grid-cols-2">
                    <div>Camera feed mirrors automatically. Toggle focus mode to hide UI controls.</div>
                    <div>Record in landscape for the best framing. Lighting suggestions appear once live.</div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex flex-wrap items-center justify-center gap-3">
                {!isRecording && !hasRecording && (
                  <Button
                    size="lg"
                    onClick={startRecording}
                    className="h-16 w-16 rounded-full bg-red-500 p-0 hover:bg-red-600"
                    aria-label="Start recording"
                  >
                    <div className="h-6 w-6 rounded-sm bg-white" />
                  </Button>
                )}

                {isRecording && (
                  <>
                    <Button
                      size="lg"
                      onClick={pauseRecording}
                      variant="outline"
                      className="h-12 w-12 rounded-full bg-muted/40 p-0"
                      aria-label={isPaused ? "Resume recording" : "Pause recording"}
                    >
                      {isPaused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
                    </Button>
                    <Button
                      size="lg"
                      onClick={stopRecording}
                      className="h-16 w-16 rounded-full bg-red-500 p-0 hover:bg-red-600"
                      aria-label="Stop recording"
                    >
                      <Square className="h-6 w-6" fill="currentColor" />
                    </Button>
                  </>
                )}

                {hasRecording && !isRecording && (
                  <>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={resetRecording}
                      className="rounded-full border-foreground/10 bg-muted/30"
                    >
                      <RotateCcw className="mr-2 h-4 w-4" />
                      New take
                    </Button>
                    <Button size="lg" className="rounded-full bg-purple-500 hover:bg-purple-600">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                    <Button size="lg" className="rounded-full bg-orange-500 hover:bg-orange-600">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </>
                )}
              </div>

              {hasRecording && (
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  Recording saved • {formatTime(recordingTime)}
                </p>
              )}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-border/40 bg-background/90 p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Beat volume</p>
                <p className="text-xs text-muted-foreground">Adjust playback mix in your headphones.</p>
              </div>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsBeatMuted((previous) => !previous)}
                className="rounded-full border border-border/30 bg-muted/30"
                aria-label={isBeatMuted ? "Unmute beat" : "Mute beat"}
              >
                {isBeatMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
            </div>
            <Slider value={beatVolume} onValueChange={setBeatVolume} max={100} step={1} disabled={isBeatMuted} />
            <p className="mt-2 text-right text-xs text-muted-foreground">{isBeatMuted ? "Muted" : `${beatVolume[0]}%`}</p>
          </Card>

          <Card className="border-border/40 bg-background/90 p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Mic gain</p>
                <p className="text-xs text-muted-foreground">Aim for peaks around -6dB. Adjust between punch-ins.</p>
              </div>
              <Headphones className="h-4 w-4 text-muted-foreground" />
            </div>
            <Slider value={micVolume} onValueChange={setMicVolume} max={100} step={1} />
            <p className="mt-2 text-right text-xs text-muted-foreground">{micVolume[0]}%</p>
          </Card>

          <Card className="border-border/40 bg-background/90 p-6">
            <h3 className="mb-4 text-sm font-semibold text-foreground">Session options</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-medium">Count-in</p>
                  <p className="text-xs text-muted-foreground">4 bars before recording starts.</p>
                </div>
                <Switch checked={countIn} onCheckedChange={setCountIn} />
              </div>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-medium">Metronome</p>
                  <p className="text-xs text-muted-foreground">Audible clicks on every bar.</p>
                </div>
                <Switch checked={metronomeEnabled} onCheckedChange={setMetronomeEnabled} />
              </div>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-medium">Auto-save</p>
                  <p className="text-xs text-muted-foreground">Store takes to your cloud locker.</p>
                </div>
                <Switch checked={autoSaveEnabled} onCheckedChange={setAutoSaveEnabled} />
              </div>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-medium">Focus mode</p>
                  <p className="text-xs text-muted-foreground">Hide UI panels while recording.</p>
                </div>
                <Switch checked={focusMode} onCheckedChange={setFocusMode} />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-2xl border border-border/30 bg-muted/20 p-3 text-xs text-muted-foreground">
              <Activity className="h-4 w-4 text-purple-300" />
              {metronomeEnabled
                ? "Metronome routed to headphones only."
                : "Enable metronome to stay tight with the groove."}
            </div>
          </Card>

          <Card className="border-border/40 bg-purple-500/10 p-6">
            <h3 className="mb-3 text-sm font-semibold text-foreground">Warm-up flow</h3>
            <ul className="space-y-3 text-sm text-purple-100/80">
              {warmupPrompts.map((prompt) => (
                <li key={prompt} className="flex gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-purple-200" />
                  <span>{prompt}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="mt-4 w-full border-purple-300/40 text-purple-100 hover:bg-purple-500/20">
              Launch guided warm-up
            </Button>
          </Card>

          <Card className="border-border/40 bg-background/90 p-6">
            <h3 className="mb-3 text-sm font-semibold text-foreground">Already have a take?</h3>
            <p className="text-xs text-muted-foreground">
              Drag and drop existing vocals to compare, comp, or share with collaborators.
            </p>
            <Button variant="outline" className="mt-4 w-full border-dashed border-border/40 bg-muted/20 text-muted-foreground hover:border-foreground">
              <Upload className="mr-2 h-4 w-4" />
              Upload recording
            </Button>
          </Card>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-border/40 bg-background/90">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold">Session timeline</CardTitle>
            <CardDescription>Mark the best moments and keep notes for mix engineers.</CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <ScrollArea className="max-h-60 px-6">
              <div className="space-y-4">
                {sessionTakes.map((take) => (
                  <div
                    key={take.id}
                    className="rounded-2xl border border-border/30 bg-muted/20 p-4 text-sm text-muted-foreground"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-semibold text-foreground">{take.title}</span>
                      <Badge
                        variant="outline"
                        className={`border ${
                          take.status === "Selected"
                            ? "border-purple-400/60 bg-purple-500/10 text-purple-200"
                            : take.status === "Review"
                              ? "border-orange-400/50 bg-orange-500/10 text-orange-200"
                              : "border-border/40 text-muted-foreground"
                        }`}
                      >
                        {take.status}
                      </Badge>
                    </div>
                    <p className="mt-2 text-xs">{take.note}</p>
                    <p className="mt-2 text-right text-xs font-medium text-purple-200">{take.length}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="border-t border-border/30 py-4 text-xs text-muted-foreground">
            Auto-save is {autoSaveEnabled ? "active — timeline syncs to your library." : "off — export to keep your notes."}
          </CardFooter>
        </Card>

        <Card className="border-border/40 bg-background/90">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold">Lyric scratchpad</CardTitle>
            <CardDescription>Keep punch-in notes, alternate lines, and ad-lib plans handy.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              value={lyricNotes}
              onChange={(event) => setLyricNotes(event.target.value)}
              rows={10}
              className="min-h-[200px] rounded-2xl border border-border/40 bg-muted/15 text-sm text-foreground"
            />
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <Button variant="outline" size="sm" className="gap-2 border-border/40 text-muted-foreground hover:bg-muted/30">
                <Sparkles className="h-4 w-4 text-purple-300" />
                Suggest rhyme
              </Button>
              <span>Markdown supported for quick formatting.</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border/40 bg-background/90">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold">Keyboard shortcuts</CardTitle>
            <CardDescription>Stay in the zone without leaving the mic.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {shortcuts.map((shortcut) => (
              <div
                key={shortcut.keys}
                className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-border/30 bg-muted/20 p-3 text-sm text-muted-foreground"
              >
                <span>{shortcut.action}</span>
                <span className="rounded-md bg-background/90 px-2 py-1 font-mono text-xs text-foreground">{shortcut.keys}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/40 bg-background/90">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold">Try another beat in this vibe</CardTitle>
            <CardDescription>Instantly load a new booth with similar energy.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {relatedBeats.map((suggestion) => (
              <div
                key={suggestion.id}
                className="flex items-center justify-between gap-3 rounded-xl border border-border/30 bg-muted/20 p-3 text-sm text-muted-foreground"
              >
                <div>
                  <p className="font-semibold text-foreground">{suggestion.title}</p>
                  <p className="text-xs">
                    {suggestion.genre} • {suggestion.bpm} BPM
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-purple-400/40 text-purple-300 hover:bg-purple-500/10"
                  asChild
                >
                  <Link href={`/booth/${suggestion.id}`}>Load booth</Link>
                </Button>
              </div>
            ))}
            <div className="rounded-xl border border-dashed border-border/40 bg-muted/10 p-3 text-xs text-muted-foreground">
              Want custom stems? Mark your favorite take and request a mixdown while you are still in the booth.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
