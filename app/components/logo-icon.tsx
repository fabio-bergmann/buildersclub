export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
      className={className}
    >
      <defs>
        <filter
          id="logoShadow"
          filterUnits="userSpaceOnUse"
          x="-80"
          y="-60"
          width="288"
          height="350"
          colorInterpolationFilters="sRGB"
        >
          {/* 8-layer cascading shadow */}
          <feFlood floodColor="#2D73FB" floodOpacity="0.18" result="c1" />
          <feFlood floodColor="#2D73FB" floodOpacity="0.18" result="c2" />
          <feFlood floodColor="#2D73FB" floodOpacity="0.18" result="c3" />
          <feFlood floodColor="#2D73FB" floodOpacity="0.18" result="c4" />
          <feFlood floodColor="#2D73FB" floodOpacity="0.18" result="c5" />
          <feFlood floodColor="#2D73FB" floodOpacity="0.18" result="c6" />
          <feFlood floodColor="#2D73FB" floodOpacity="0.18" result="c7" />
          <feFlood floodColor="#2D73FB" floodOpacity="0.18" result="c8" />

          <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" result="b1" />
          <feOffset in="b1" dy="0.4" result="o1" />
          <feComposite in="c1" in2="o1" operator="in" result="s1" />

          <feGaussianBlur in="SourceAlpha" stdDeviation="1.19" result="b2" />
          <feOffset in="b2" dy="1" result="o2" />
          <feComposite in="c2" in2="o2" operator="in" result="s2" />

          <feGaussianBlur in="SourceAlpha" stdDeviation="2.18" result="b3" />
          <feOffset in="b3" dy="1.8" result="o3" />
          <feComposite in="c3" in2="o3" operator="in" result="s3" />

          <feGaussianBlur in="SourceAlpha" stdDeviation="3.62" result="b4" />
          <feOffset in="b4" dy="3" result="o4" />
          <feComposite in="c4" in2="o4" operator="in" result="s4" />

          <feGaussianBlur in="SourceAlpha" stdDeviation="5.85" result="b5" />
          <feOffset in="b5" dy="4.9" result="o5" />
          <feComposite in="c5" in2="o5" operator="in" result="s5" />

          <feGaussianBlur in="SourceAlpha" stdDeviation="9.57" result="b6" />
          <feOffset in="b6" dy="8" result="o6" />
          <feComposite in="c6" in2="o6" operator="in" result="s6" />

          <feGaussianBlur in="SourceAlpha" stdDeviation="16.49" result="b7" />
          <feOffset in="b7" dy="13.7" result="o7" />
          <feComposite in="c7" in2="o7" operator="in" result="s7" />

          <feGaussianBlur in="SourceAlpha" stdDeviation="30" result="b8" />
          <feOffset in="b8" dy="25" result="o8" />
          <feComposite in="c8" in2="o8" operator="in" result="s8" />

          <feMerge>
            <feMergeNode in="s1" />
            <feMergeNode in="s2" />
            <feMergeNode in="s3" />
            <feMergeNode in="s4" />
            <feMergeNode in="s5" />
            <feMergeNode in="s6" />
            <feMergeNode in="s7" />
            <feMergeNode in="s8" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter
          id="filter0_iii_131_59"
          filterUnits="userSpaceOnUse"
          x="0"
          y="-3"
          width="128"
          height="134"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="-3" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_131_59" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="effect1_innerShadow_131_59" result="effect2_innerShadow_131_59" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_131_59" />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="effect2_innerShadow_131_59" result="effect3_innerShadow_131_59" />
        </filter>

        <linearGradient id="paint0_linear_131_59" x1="64" y1="0" x2="69.3333" y2="128" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id="paint1_linear_131_59" x1="64" y1="27.1967" x2="64" y2="100.803" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.9" />
          <stop offset="1" stopColor="white" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="paint2_linear_131_59" x1="64" y1="0" x2="64" y2="128" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.12" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_131_59">
          <rect width="128" height="128" rx="30" fill="white" />
        </clipPath>
      </defs>

      <g filter="url(#logoShadow)">
        <g filter="url(#filter0_iii_131_59)">
          <g clipPath="url(#clip0_131_59)">
            <rect width="128" height="128" rx="30" fill="#256FFC" />
            <rect width="128" height="128" fill="url(#paint0_linear_131_59)" />
            <path
              d="M65.6219 23.1644C64.6188 22.9589 63.5859 22.9461 62.579 23.1259L62.3781 23.1644L62.1254 23.2211C60.8702 23.5309 59.7707 24.1861 59.002 24.6115L31.2607 39.9626C30.4471 40.4128 29.2487 41.0252 28.2934 41.974L28.1053 42.1682L27.9633 42.3265C27.3108 43.0706 26.805 43.9273 26.4706 44.8518L26.4016 45.051L26.3229 45.3064C25.9574 46.5869 26.0017 47.9138 26.0017 48.845V79.155C26.0017 80.1483 25.9513 81.5917 26.4016 82.949C26.7557 84.0165 27.3356 84.9999 28.1053 85.8318C29.0868 86.8926 30.3928 87.5571 31.2607 88.0374L59.002 103.389C59.8218 103.842 61.0181 104.557 62.3781 104.836C63.4481 105.055 64.552 105.055 65.6219 104.836C66.9819 104.557 68.1782 103.842 68.998 103.389L96.7393 88.0374C97.6072 87.5571 98.9132 86.8926 99.8947 85.8318C100.664 84.9999 101.244 84.0165 101.598 82.949C102.049 81.5917 101.998 80.1482 101.998 79.155V48.845C101.998 47.8518 102.049 46.4083 101.598 45.051L101.529 44.8518C101.171 43.8611 100.616 42.9481 99.8947 42.1682L99.7066 41.974C98.7513 41.0252 97.5529 40.4128 96.7393 39.9626L68.998 24.6115C68.1782 24.1578 66.9819 23.443 65.6219 23.1644ZM64.1644 31.5657C64.3468 31.6639 64.5561 31.7803 64.8279 31.9308L89.042 45.3291L64.0006 59.1865L38.9587 45.3291C42.7715 43.2192 46.0362 41.4128 49.3009 39.6063C53.5278 37.2673 57.7552 34.9283 63.1721 31.9308C63.4439 31.7803 63.6532 31.6639 63.8356 31.5657C63.8968 31.5327 63.952 31.5057 64 31.4805C64.048 31.5057 64.1032 31.5327 64.1644 31.5657ZM93.4789 79.9545C93.4777 80.0544 93.4758 80.1385 93.4738 80.2099C93.416 80.2439 93.3486 80.2832 93.269 80.3284C93.0786 80.4368 92.8568 80.5593 92.5698 80.7181L68.2584 94.1707V66.4566L93.4815 52.499V79.155C93.4815 79.4819 93.4815 79.7353 93.4789 79.9545Z"
              fill="url(#paint1_linear_131_59)"
            />
          </g>
          <rect x="1" y="1" width="126" height="126" rx="29" stroke="url(#paint2_linear_131_59)" strokeWidth="2" />
        </g>
      </g>
    </svg>
  );
}
