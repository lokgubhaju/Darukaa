import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import lottie, { AnimationItem } from 'lottie-web';

interface LottieScrollTriggerVars {
  target: string | Element;
  trigger: string | Element;
  path: string;
  speed?: 'slow' | 'medium' | 'fast';
  pin?: string | Element;
  scrub?: boolean | number;
  markers?: boolean;
  start?: string;
  end?: string;
  renderer?: 'svg' | 'canvas' | 'html';
  animationData?: object;
  duration?: number;
  delay?: number;
  ease?: string;
}

function LottieScrollTrigger(vars: LottieScrollTriggerVars): AnimationItem {
  let playhead = { frame: 0 },
    target = gsap.utils.toArray(vars.target)[0] as Element, // Assert that target is of type Element
    speeds = { slow: '+=2000', medium: '+=1000', fast: '+=500' },
    st = {
      trigger: vars.trigger || target,
      pin: vars.pin || target,
      start: vars.start || 'top top',
      end: speeds[vars.speed || 'medium'],
      scrub: vars.scrub || 1,
      // markers: vars.markers || false,
    },
    animation = lottie.loadAnimation({
      container: target, // target is now asserted to be an Element
      renderer: vars.renderer || 'svg',
      loop: false,
      autoplay: false,
      path: vars.path,
      animationData: vars.animationData,
    });

  animation.addEventListener('DOMLoaded', function () {
    gsap.to(playhead, {
      duration: vars.duration || 0.5,
      delay: vars.delay || 0,
      frame: animation.totalFrames - 1,
      ease: vars.ease || 'none',
      onUpdate: () => animation.goToAndStop(playhead.frame, true),
      scrollTrigger: st,
    });
    ScrollTrigger.sort();
    ScrollTrigger.refresh();
  });

  return animation;
}

export default LottieScrollTrigger;
