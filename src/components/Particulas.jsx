import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../config/particles.json";
export const Particulas = () => {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return <Particles options={particlesOptions} init={particlesInit} />;
};
