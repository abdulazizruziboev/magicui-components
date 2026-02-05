import { PixelImage } from "@/components/ui/pixel-image"

export function PixelPhoto() {
  return (
    <PixelImage
      src="https://magicui.design/pixel-image-demo.jpg"
      customGrid={{ rows: 4, cols: 6 }}
      grayscaleAnimation
    />
  )
}
