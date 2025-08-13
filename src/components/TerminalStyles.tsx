// components/TerminalStyles.tsx
export function TerminalStyles() {
  return (
    <style jsx>{`
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(4px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes cardFloat {
        0%,
        100% {
          transform: perspective(1000px) rotateY(-15deg) rotateX(5deg)
            translateY(0px);
        }
        50% {
          transform: perspective(1000px) rotateY(-15deg) rotateX(5deg)
            translateY(-10px);
        }
      }

      @keyframes cardRotate {
        0% {
          transform: perspective(1000px) rotateY(-15deg) rotateX(5deg);
        }
        25% {
          transform: perspective(1000px) rotateY(-5deg) rotateX(2deg);
        }
        50% {
          transform: perspective(1000px) rotateY(-15deg) rotateX(5deg);
        }
        75% {
          transform: perspective(1000px) rotateY(-25deg) rotateX(8deg);
        }
        100% {
          transform: perspective(1000px) rotateY(-15deg) rotateX(5deg);
        }
      }

      @keyframes shimmer {
        0% {
          background-position: -100% 0;
        }
        100% {
          background-position: 100% 0;
        }
      }

      @keyframes spinFoil {
        to {
          transform: rotate(360deg);
        }
      }

      @keyframes foilShift {
        0%,
        100% {
          transform: translate3d(0, 0, 0) scale(1);
          filter: hue-rotate(0deg);
        }
        50% {
          transform: translate3d(0, -2px, 0) scale(1.01);
          filter: hue-rotate(20deg);
        }
      }

      @keyframes sparkle {
        0%,
        100% {
          opacity: 0.45;
          transform: translateY(0);
        }
        50% {
          opacity: 0.75;
          transform: translateY(-1px);
        }
      }
    `}</style>
  );
}
