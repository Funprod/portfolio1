import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";

export const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        // await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                /*                 background: {
                                    color: {
                                        value: "#0d47a1",
                                    },
                                }, */
                fpsLimit: 120,
                interactivity: {
                    events: {
                        /*                         onClick: {
                                                    enable: true,
                                                    mode: "push",
                                                }, */
                        /*                         onHover: {
                                                    enable: true,
                                                    mode: "repulse",
                                                }, */
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#E63946",
                    },
                    links: {
                        color: "#E63946",
                        distance: 200,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 3,
                        straight: true,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000,
                        },
                        value: 100,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};