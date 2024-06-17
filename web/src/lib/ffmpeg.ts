import { FFmpeg } from '@ffmpeg/ffmpeg'

let ffmpeg: FFmpeg | null

export async function getFFmpeg() {
  if (ffmpeg) {
    return ffmpeg
  }

  ffmpeg = new FFmpeg()

  if (!ffmpeg.loaded) {
    await ffmpeg.load()
  }

  return ffmpeg
}