var config = {};
config.light = {
  particles: {
    number: {
      value: 55,
      density: { enable: true, value_area: 583.4159839310572 },
    },
    color: { value: '#29b4de' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#fefefe' },
      polygon: { nb_sides: 5 },
      image: {},
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 0,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#736e63',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'bubble' },
      onclick: { enable: true, mode: 'push' },
      resize: true,
    },
    modes: {
      grab: {
        distance: 1051.5202702702693,
        line_linked: { opacity: 0.051362387323762804 },
      },
      bubble: {
        distance: 88.68243243243236,
        size: 12.668918918918909,
        duration: 2,
        opacity: 0.8614864864864858,
        speed: 3,
      },
      repulse: { distance: 42.22972972972969, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
};

config.dark = {
  particles: {
    number: {
      value: 55,
      density: { enable: true, value_area: 583.4159839310572 },
    },
    color: { value: '#ffffff' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#000000' },
      polygon: { nb_sides: 5 },
      image: { src: 'img/github.svg', width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 0,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'bubble' },
      onclick: { enable: true, mode: 'push' },
      resize: true,
    },
    modes: {
      grab: {
        distance: 1051.5202702702693,
        line_linked: { opacity: 0.051362387323762804 },
      },
      bubble: {
        distance: 88.68243243243236,
        size: 12.668918918918909,
        duration: 2,
        opacity: 0.8614864864864858,
        speed: 3,
      },
      repulse: { distance: 42.22972972972969, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
};

particlesJS('decor', config.light);
