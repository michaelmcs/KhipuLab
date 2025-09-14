import { Component } from '@angular/core';
import {MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine} from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  id = "tsparticles";

  particlesOptions = {
    background: {
      color: {
        value: "#ffffff",
      },
    },
    fullScreen: {
      enable: false,
      zIndex: 0
    },
    style:{
      height: '600px'
    },
    fpsLimit: 30,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push,
        },
        onHover: {
          enable: true,
          mode: HoverMode.repulse,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 90,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#adb5bd",
      },
      links: {
        color: "#adb5bd",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  particlesLoaded(container: Container): void {

  }

  async particlesInit(engine: Engine): Promise<void> {

    await loadSlim(engine);
  }
}
