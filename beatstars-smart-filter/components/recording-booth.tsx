"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Mic, Video, Square, Play, Pause, Download, Upload, Volume2, VolumeX, RotateCcw, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface RecordingBoothProps {
  beatId?: string
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

  const videoRef = useRef<HTMLVideoElement>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Mock beat data - in production this would be fetched based on beatId
  const beat = {
    id: beatId || "1",
    title: "Midnight Hustle",
    producer: "TriuneBeats",
    bpm: 140,
    key: "C Minor",
  }

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
        videoRef.current.play()
      }

      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder

      const chunks: BlobPart[] = []
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data)
        }
      }

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, {
          type: recordingMode === "video" ? "video/webm" : "audio/webm",
        })
        console.log("[v0] Recording saved:", blob)
        setHasRecording(true)
      }

      mediaRecorder.start()
      setIsRecording(true)
      setIsBeatPlaying(true)

      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1)
      }, 1000)
    } catch (error) {
      console.error("[v0] Error accessing media devices:", error)
      alert("Could not access microphone/camera. Please check permissions.")
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
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Recording Booth</h1>
        <p className="text-muted-foreground">Record your vocals over the beat and share with the community</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Recording Area */}
        <div className="lg:col-span-2">
          <Card className="overflow-hidden">
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
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-purple-500/20">
                    {recordingMode === "video" ? (
                      <Video className="h-12 w-12 text-purple-400" />
                    ) : (
                      <Mic className="h-12 w-12 text-purple-400" />
                    )}
                  </div>
                  <p className="text-lg font-medium">Ready to record</p>
                  <p className="text-sm text-muted-foreground">
                    {recordingMode === "video" ? "Video & Audio" : "Audio Only"}
                  </p>
                </div>
              )}

              {/* Recording indicator */}
              {isRecording && (
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-red-500" />
                  <Badge variant="destructive" className="font-mono">
                    REC {formatTime(recordingTime)}
                  </Badge>
                </div>
              )}

              {/* Beat info overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <Card className="bg-black/50 p-3 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white">{beat.title}</p>
                      <p className="text-xs text-white/70">
                        {beat.producer} • {beat.bpm} BPM • {beat.key}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setIsBeatPlaying(!isBeatPlaying)}
                      className="text-white hover:bg-white/20"
                    >
                      {isBeatPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                  </div>
                </Card>
              </div>
            </div>

            {/* Controls */}
            <div className="border-t border-border p-6">
              <Tabs value={recordingMode} onValueChange={(v) => setRecordingMode(v as "audio" | "video")}>
                <TabsList className="mb-6 grid w-full grid-cols-2">
                  <TabsTrigger value="audio" disabled={isRecording}>
                    <Mic className="mr-2 h-4 w-4" />
                    Audio Only
                  </TabsTrigger>
                  <TabsTrigger value="video" disabled={isRecording}>
                    <Video className="mr-2 h-4 w-4" />
                    Audio + Video
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="flex items-center justify-center gap-3">
                {!isRecording && !hasRecording && (
                  <Button
                    size="lg"
                    onClick={startRecording}
                    className="h-16 w-16 rounded-full bg-red-500 p-0 hover:bg-red-600"
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
                      className="h-12 w-12 rounded-full p-0 bg-transparent"
                    >
                      {isPaused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
                    </Button>
                    <Button
                      size="lg"
                      onClick={stopRecording}
                      className="h-16 w-16 rounded-full bg-red-500 p-0 hover:bg-red-600"
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
                      className="rounded-full bg-transparent"
                    >
                      <RotateCcw className="mr-2 h-4 w-4" />
                      New Take
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

        {/* Sidebar Controls */}
        <div className="space-y-6">
          {/* Beat Volume */}
          <Card className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <label className="text-sm font-medium">Beat Volume</label>
              <Button size="sm" variant="ghost" onClick={() => setIsBeatMuted(!isBeatMuted)} className="h-8 w-8 p-0">
                {isBeatMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
            </div>
            <Slider value={beatVolume} onValueChange={setBeatVolume} max={100} step={1} disabled={isBeatMuted} />
            <p className="mt-2 text-right text-xs text-muted-foreground">{beatVolume[0]}%</p>
          </Card>

          {/* Mic Volume */}
          <Card className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <label className="text-sm font-medium">Mic Volume</label>
              <Mic className="h-4 w-4 text-muted-foreground" />
            </div>
            <Slider value={micVolume} onValueChange={setMicVolume} max={100} step={1} />
            <p className="mt-2 text-right text-xs text-muted-foreground">{micVolume[0]}%</p>
          </Card>

          {/* Tips */}
          <Card className="bg-purple-500/5 p-6">
            <h3 className="mb-3 font-semibold">Recording Tips</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-purple-400">•</span>
                <span>Use headphones to prevent audio feedback</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400">•</span>
                <span>Position mic 6-12 inches from your mouth</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400">•</span>
                <span>Record in a quiet environment</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400">•</span>
                <span>Do multiple takes to get it perfect</span>
              </li>
            </ul>
          </Card>

          {/* Upload existing recording */}
          <Card className="p-6">
            <h3 className="mb-3 font-semibold">Have a recording?</h3>
            <Button variant="outline" className="w-full bg-transparent">
              <Upload className="mr-2 h-4 w-4" />
              Upload File
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
