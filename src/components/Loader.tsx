import React from "react";

const Loader: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(120deg, #e0e7ef 0%, #f8fafc 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 3000,
        overflow: "hidden",
      }}
    >
      {/* Floating particles */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              backgroundColor: "#b6c2e0",
              borderRadius: "50%",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3,
              animation: `particle-float ${
                3 + Math.random() * 4
              }s infinite ease-in-out`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main loading container */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0.15)",
          borderRadius: 24,
          padding: "48px 40px",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 20px 60px rgba(182, 194, 224, 0.4)",
          animation: "container-glow 3s infinite ease-in-out",
        }}
      >
        {/* Book icon container */}
        <div
          style={{
            position: "relative",
            width: 180,
            height: 180,
            marginBottom: 32,
          }}
        >
          {/* Rotating rings */}
          <div
            style={{
              position: "absolute",
              top: -20,
              left: -20,
              width: 220,
              height: 220,
              border: "2px solid #b6c2e0",
              borderRadius: "50%",
              opacity: 0.3,
              animation: "ring-rotate 8s linear infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: -10,
              left: -10,
              width: 200,
              height: 200,
              border: "1px solid #b6c2e0",
              borderRadius: "50%",
              opacity: 0.2,
              animation: "ring-rotate 6s linear infinite reverse",
            }}
          />

          {/* Book icon */}
          <img
            src="/books.svg"
            alt="Loading books"
            style={{
              width: "100%",
              height: "100%",
              filter: "drop-shadow(0 12px 40px rgba(182, 194, 224, 0.5))",
              animation: "book-float 2s infinite ease-in-out",
              transformOrigin: "center",
            }}
          />

          {/* Enhanced shadow */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              bottom: -15,
              transform: "translateX(-50%)",
              width: 140,
              height: 20,
              background:
                "radial-gradient(ellipse at center, #b6c2e0 0%, transparent 70%)",
              opacity: 0.4,
              filter: "blur(3px)",
              zIndex: -1,
              animation: "shadow-breathe 2s infinite ease-in-out",
            }}
          />
        </div>

        {/* Loading text */}
        <h2
          style={{
            fontWeight: 800,
            letterSpacing: 2,
            color: "#2d3a4a",
            textShadow: "0 2px 12px rgba(224, 231, 239, 0.8)",
            marginBottom: 12,
            fontSize: 34,
            animation: "text-shimmer 3s infinite",
            background: "linear-gradient(90deg, #2d3a4a, #4b5563, #2d3a4a)",
            backgroundSize: "200% auto",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
          }}
        >
          Welcome to Anywhere Platform
        </h2>

        <p
          style={{
            color: "#4b5563",
            opacity: 0.85,
            fontWeight: 500,
            fontSize: 18,
            animation: "fade-pulse 2s infinite ease-in-out",
            letterSpacing: 1,
            textAlign: "center",
          }}
        >
          Loading your experience...
        </p>

        {/* Loading progress bar */}
        <div
          style={{
            width: 280,
            height: 6,
            backgroundColor: "rgba(182, 194, 224, 0.2)",
            borderRadius: 3,
            marginTop: 24,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              background:
                "linear-gradient(90deg, transparent, #b6c2e0, transparent)",
              animation: "progress-slide 1.5s infinite ease-in-out",
            }}
          />
        </div>

        {/* Loading dots */}
        <div
          style={{
            display: "flex",
            gap: 8,
            marginTop: 20,
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: 8,
                height: 8,
                backgroundColor: "#b6c2e0",
                borderRadius: "50%",
                animation: `dot-bounce 1.4s infinite ease-in-out ${i * 0.16}s`,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes book-float {
          0%, 100% { transform: translateY(0) scale(1) rotate(0deg); }
          50% { transform: translateY(-15px) scale(1.05) rotate(2deg); }
        }
        
        @keyframes shadow-breathe {
          0%, 100% { transform: translateX(-50%) scaleX(1) scaleY(1); opacity: 0.4; }
          50% { transform: translateX(-50%) scaleX(1.2) scaleY(0.8); opacity: 0.25; }
        }
        
        @keyframes text-shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        
        @keyframes fade-pulse {
          0%, 100% { opacity: 0.85; }
          50% { opacity: 0.6; }
        }
        
        @keyframes container-glow {
          0%, 100% { 
            box-shadow: 0 20px 60px rgba(182, 194, 224, 0.4);
            transform: translateY(0);
          }
          50% { 
            box-shadow: 0 25px 80px rgba(182, 194, 224, 0.6);
            transform: translateY(-5px);
          }
        }
        
        @keyframes ring-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes progress-slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes dot-bounce {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
          40% { transform: scale(1.2); opacity: 1; }
        }
        
        @keyframes particle-float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.1; }
        }
      `}</style>
    </div>
  );
};

export default Loader;
