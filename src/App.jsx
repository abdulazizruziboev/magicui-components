import { TextAnimateDemo } from "./components/App/AnimatedText"
import { TypingText } from "./components/App/AnimatedTypingText"
import { AuroraTextDemo } from "./components/App/Aurora-Text"
import { AvatarCirclesDemo } from "./components/App/AvatarCircles"
import { BlurFadeDemo } from "./components/App/BlurFade"
import { BorderBeamCard } from "./components/App/BorderBeam"
import { ComicTextDemo } from "./components/App/ComicText"
import { CoolModeDemo } from "./components/App/CoolButton"
import { GlobeDemo } from "./components/App/Globe"
import { HeroVideoDialogDemo } from "./components/App/HeroVideoDialog"
import { HyperTextDemo } from "./components/App/HyperText"
import { InteractiveHoverButtonDemo } from "./components/App/InteractiveHoverButton"
import { MagicCardDemo } from "./components/App/MagicForm"
import { MeteorDemo } from "./components/App/Meteors"
import { MorphingTextDemo } from "./components/App/MorphingText"
import { NumberTickerDemo } from "./components/App/NumberTickerText"
import { OrbitingCirclesDemo } from "./components/App/OrbitingCircels"
import { PixelPhoto } from "./components/App/PixelPhoto"
import { PulsatingButtonDemo } from "./components/App/PulsatingButton"
import { RainbowButtonDemo } from "./components/App/RainbowButton"
import { RippleButtonDemo } from "./components/App/RippleButton"
import { ScrollProgressDemo } from "./components/App/ScrollProgress"
import { ShimmerButtonDemo } from "./components/App/ShimmerButton"
import { ShinyButtonDemo } from "./components/App/ShinyButton"
import { SparklesTextDemo } from "./components/App/SparklesText"
import { SpinningTextBasic } from "./components/App/SpinningText"
import { TerminalDemo } from "./components/App/Terminal"
import { HighlighterDemo } from "./components/App/TextHighlighter"
import { VideoTextDemo } from "./components/App/VideoText"
import { WordRotateDemo } from "./components/App/WordRotate"

function App() {
  return (
    <>
    <div className="mx-auto w-full max-w-[1440px] h-screen">
      <div className="mx-auto flex gap-x-3 py-10">
        <div className="min-w-[385px] flex flex-col gap-y-3">
          <TerminalDemo/>
          <MagicCardDemo/>
        </div>
        <div>
          <HeroVideoDialogDemo/>
          <div className="grid gap-y-1 gap-x-3 grid-cols-3 p-2">
            <RainbowButtonDemo/>
            <ShimmerButtonDemo/>
            <RippleButtonDemo/>
            <ShinyButtonDemo/>
            <div className="flex gap-x-2 justify-around">
            <CoolModeDemo/>
            <InteractiveHoverButtonDemo/>
            </div>
            <PulsatingButtonDemo/>
          </div>
        </div>
      </div>
      <div className="mx-auto flex gap-x-3 pb-10">
        <div className="max-w-100">
          <BlurFadeDemo/>
        </div>
        <div>
          <GlobeDemo/>
        </div>
          <OrbitingCirclesDemo/>
      </div>
      <div className="mx-auto flex gap-x-3 pb-20 items-center justify-around flex-col">
        <div className="flex justify-around w-full">
        <AvatarCirclesDemo/>
        <TextAnimateDemo/>
        <div>
          <HighlighterDemo/>
        </div>
        </div>
        <TypingText></TypingText>
        <div className="flex justify-around w-full">
          <AuroraTextDemo/>
          <VideoTextDemo/>
        </div>
        <div className="flex justify-between items-center gap-x-5 w-full">
          <NumberTickerDemo/>
          <HyperTextDemo/>
          <WordRotateDemo/>
          <SparklesTextDemo/>
        </div>
          <MorphingTextDemo/>
      </div>
      <div className="mx-auto flex gap-x-3 pb-10 justify-around">
        <SpinningTextBasic/>
        <ScrollProgressDemo/>
        <ComicTextDemo/>
      </div>
      <div className="mx-auto flex justify-around pb-10 gap-x-3">
        <PixelPhoto/>
        <BorderBeamCard/>
      </div>
      <div className="fixed inset-0 h-screen w-screen ">
        <MeteorDemo/>
      </div>
    </div>
    </>
  )
}

export default App
