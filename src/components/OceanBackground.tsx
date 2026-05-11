export default function OceanBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="ocean-aurora" />
      <div className="ocean-grid" />
      <div className="ocean-rings" />
      <div className="ocean-contour ocean-contour-one" />
      <div className="ocean-contour ocean-contour-two" />
      <div className="ambient-orb ambient-orb-one" />
      <div className="ambient-orb ambient-orb-two" />
      <div className="ambient-orb ambient-orb-three" />
      <div className="light-beam light-beam-left" />
      <div className="light-beam light-beam-right" />
      <div className="ocean-floor" />
      <div className="ocean-vignette" />
    </div>
  );
}
