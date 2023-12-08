import React from "react";

// An SVG of the logo for the app.
// The `accentColor` is used to fill the bottom portion.
export default function Logo({
  size = 60,
  accentColor = "#f7931e",
}: {
  size?: number;
  accentColor?: string;
}) {
  return (
    <svg
      width={size}
      height={(500 / 420.35) * size}
      viewBox={`0 0 420.35 500`}
      fill="none"
    >
      <path d="m295.58,198.92h-.04c.12.12.28.24.4.4l-.36-.4Zm.75-44.45c0-.51-.04-1.07-.08-1.54.04.51.04,1.03.04,1.54,0,12.14-1.19,24.2-3.48,35.99,2.33-11.79,3.52-23.85,3.52-35.99Zm.51,45.68h-.04c.91.87,1.82,1.78,2.69,2.69-.87-.95-1.74-1.82-2.65-2.69Zm2.69,2.69h-.04c.2.2.44.43.67.67-.2-.24-.4-.47-.63-.67Zm6.01,6.56c-1.19-1.34-2.37-2.73-3.44-3.84-.4-.47-.83-.95-1.31-1.38.43.43.87.91,1.27,1.38,1.07,1.11,2.25,2.49,3.44,3.84.99,1.15,1.94,2.33,2.85,3.52-.87-1.19-1.82-2.37-2.81-3.52Zm8.23,10.99c2.45,3.68,4.71,7.47,6.76,11.35-2.02-3.92-4.27-7.67-6.76-11.35Zm6.76,11.35c1.38,2.61,2.65,5.3,3.84,8.03-1.15-2.73-2.41-5.42-3.84-8.03Zm3.84,8.03c1.19,2.73,2.29,5.5,3.28,8.27-.95-2.77-2.06-5.54-3.28-8.27Zm-180.93-14.71c-.55.55-1.07,1.07-1.58,1.66.59-.59,1.07-1.11,1.62-1.66h-.04Zm-13.56,17.88c1.11-1.94,2.29-3.8,3.56-5.66-1.27,1.86-2.49,3.72-3.56,5.66Zm-10.56,26.93c.59-2.69,1.31-5.38,2.14-7.99-.87,2.65-1.58,5.3-2.14,7.99Z" />
      <path d="m333.07,119.28c-14.59-10.56-30.37-19.14-47.02-25.59-12.54-35.87-36.07-66.84-66.95-87.72l-8.86-5.97-8.86,5.97c-30.89,20.88-54.42,51.85-66.95,87.72-16.69,6.45-32.51,14.99-47.06,25.51C32.67,158.66,0,222.42,0,289.8s32.67,131.1,87.32,170.53c.36.24.67.47,1.03.71,35.67,25.51,77.79,38.95,121.85,38.95s86.13-13.49,121.89-38.99c.32-.2.67-.43.99-.67h.04c54.62-39.47,87.24-103.22,87.24-170.53s-32.63-131.14-87.28-170.53Zm-40.26,71.19c2.29-11.79,3.48-23.85,3.48-35.99,0-.51,0-1.03-.04-1.54v-.43c0-1.46,0-2.89-.08-4.35-.04-1.54-.08-3.12-.2-4.67-.08-1.82-.24-3.64-.4-5.46v-.04c-.16-1.66-.32-3.32-.51-4.98,0-.16,0-.28-.04-.4,6.72,3.68,13.25,7.75,19.5,12.3,42.16,30.41,68.89,77.79,73.48,129.08h-54.14c-.12-.87-.24-1.78-.4-2.65-.12-1.03-.28-2.02-.47-3.01-.04-.32-.08-.63-.16-.95-.2-1.19-.43-2.37-.71-3.52-.24-1.38-.55-2.73-.95-4.07-.24-1.07-.55-2.18-.83-3.28-.4-1.42-.79-2.81-1.27-4.23-.44-1.42-.91-2.85-1.42-4.23-.99-2.77-2.1-5.54-3.28-8.27s-2.45-5.42-3.84-8.03c-2.06-3.88-4.31-7.67-6.76-11.35-.04-.12-.16-.28-.28-.43-.71-1.03-1.42-2.06-2.18-3.08-.91-1.34-1.9-2.65-2.97-3.95-.91-1.19-1.86-2.37-2.85-3.52-1.19-1.34-2.37-2.73-3.44-3.84-.4-.47-.83-.95-1.27-1.38-.2-.24-.4-.47-.63-.67-.24-.24-.47-.47-.67-.67-.87-.91-1.78-1.82-2.69-2.69l-.87-.83c-.12-.16-.28-.28-.4-.4-1.27-1.23-2.49-2.29-3.8-3.4.4-1.66.75-3.36,1.07-5.06Zm-159.38,46.82c.63-.91,1.31-1.82,1.98-2.73.63-.91,1.31-1.78,2.06-2.65.63-.87,1.38-1.74,2.14-2.61.75-.87,1.5-1.7,2.25-2.53v-.04c.51-.59,1.03-1.11,1.58-1.66h.04l.32-.36c.4-.43.83-.87,1.27-1.31l1.46-1.38c3.01-2.77,6.13-5.38,9.33-7.67l9.06-6.53-3.12-10.72c-.51-1.74-.95-3.44-1.42-5.18-1.3-5.22-2.33-10.52-3.08-15.86-.24-1.78-.47-3.56-.67-5.34-.55-5.38-.83-10.8-.83-16.25,0-14.99,2.18-29.82,6.41-43.98,8.58-28.59,25.47-53.71,48.05-71.78,22.5,17.95,39.27,42.87,47.89,71.26.04.16.12.36.16.51,2.14,7.12,3.76,14.36,4.79,21.67,1.11,7.36,1.62,14.79,1.62,22.3,0,14.51-2.02,28.87-6.01,42.63l-.28.95-.04.16-2.81,9.61,8.7,6.29.36.24c.79.55,1.58,1.19,2.41,1.78,2.37,1.82,4.71,3.84,6.96,5.89l.75.79.36.32c.51.47,1.07,1.03,1.54,1.58t.08.04l.28.32c.4.43.83.79,1.31,1.34.16.16.36.36.51.55.36.4.71.75,1.03,1.15.4.4.71.79,1.03,1.15,0,0,.04,0,.04.04.2.24.4.47.59.67.87,1.03,1.74,2.1,2.53,3.16.83,1.07,1.66,2.18,2.37,3.28,3.16,4.43,5.89,9.14,8.11,14.04.59,1.23,1.15,2.45,1.62,3.72.67,1.58,1.31,3.2,1.86,4.82,1.74,4.86,3.05,9.89,3.92,14.99H118.52c.24-1.38.51-2.73.79-4.11.55-2.69,1.27-5.34,2.14-7.99.43-1.34.87-2.65,1.34-3.95.4-1.03.79-2.06,1.19-3.08.44-1.03.87-2.06,1.31-3.05.47-1.03.95-2.02,1.42-3.01.44-.99.95-1.98,1.54-2.97.47-.95,1.03-1.94,1.62-2.89,1.07-1.94,2.29-3.8,3.56-5.66Zm168.39,68.34c-4.11,23.77-17.4,45.32-37.25,59.64,0,.04-.04.04-.04.04-.04,0-.04.04-.08.04-15.86,11.43-34.6,17.48-54.26,17.48s-38.4-6.05-54.22-17.48c-.04,0-.08-.04-.12-.08-19.89-14.32-33.22-35.87-37.33-59.64h183.3ZM105.91,144.86c6.25-4.51,12.73-8.62,19.5-12.26-.08.55-.12,1.11-.16,1.66-.24,2.14-.43,4.27-.59,6.41,0,.16-.04.32-.04.43-.32,4.43-.47,8.9-.47,13.37,0,13.88,1.54,27.64,4.59,41.05h-.04c-1.3,1.15-2.53,2.21-3.76,3.4l-1.19,1.15h-.04c-.47.47-.95.91-1.42,1.38-.43.47-.87.91-1.34,1.38-.87.91-1.7,1.78-2.45,2.57-1.54,1.66-3.05,3.4-4.47,5.14-.99,1.15-1.9,2.29-2.85,3.52-.12.16-.28.36-.4.55-1.11,1.42-2.18,2.93-3.2,4.39-.87,1.23-1.66,2.49-2.45,3.72-.43.63-.83,1.27-1.23,1.9-1.78,2.93-3.48,5.93-5.02,9.02-.2.36-.36.71-.51,1.07-.71,1.42-1.38,2.85-2.06,4.31,0,.04-.04.12-.08.2-.67,1.54-1.34,3.12-1.98,4.75-2.29,5.73-4.11,11.67-5.5,17.72-.4,1.54-.71,3.12-.99,4.75-.04.12-.08.28-.08.4-.32,1.5-.55,3.04-.75,4.59-.12.47-.16.91-.2,1.34-.08.4-.16.83-.2,1.23h-54.18c4.59-51.29,31.36-98.71,73.56-129.12Zm-73.56,160.76h54.18c3.72,28.75,17.4,55.45,38.6,75.26l-31.72,43.98c-34.96-30.29-56.91-73.2-61.06-119.24Zm177.85,162.74c-32.47,0-63.67-8.62-91.12-24.99l31.72-43.98c18.15,9.89,38.4,15.07,59.4,15.07s41.33-5.18,59.44-15.07l31.72,43.98c-27.53,16.37-58.73,24.99-91.16,24.99Zm116.78-43.54l-31.68-43.94c21.16-19.81,34.84-46.51,38.56-75.26h54.14c-4.11,45.99-26.06,88.9-61.02,119.2Z" />
      <path
        fill="red"
        d="m388,273.99h-54.14c-.12-.87-.24-1.78-.4-2.65-.12-1.03-.28-2.02-.47-3.01-.04-.32-.08-.63-.16-.95-.2-1.19-.43-2.37-.71-3.52-.24-1.38-.55-2.73-.95-4.07-.24-1.07-.55-2.18-.83-3.28-.4-1.42-.79-2.81-1.27-4.23-.44-1.42-.91-2.85-1.42-4.23-.95-2.77-2.06-5.54-3.28-8.27-1.15-2.73-2.41-5.42-3.84-8.03-2.02-3.92-4.27-7.67-6.76-11.35-.04-.12-.16-.28-.28-.43-.71-1.03-1.42-2.06-2.18-3.08-.91-1.34-1.9-2.65-2.97-3.95-.87-1.19-1.82-2.37-2.81-3.52-1.19-1.34-2.37-2.73-3.44-3.84-.4-.47-.83-.95-1.31-1.38-.2-.24-.4-.47-.63-.67-.2-.24-.4-.47-.63-.67h-.04c-.87-.95-1.74-1.82-2.65-2.69h-.04l-.87-.83-.36-.4h-.04c-1.27-1.23-2.49-2.29-3.8-3.4.4-1.66.75-3.36,1.07-5.06,2.33-11.79,3.52-23.85,3.52-35.99,0-.51-.04-1.07-.08-1.54v-.43c0-1.46,0-2.89-.08-4.35-.04-1.54-.08-3.12-.2-4.67-.08-1.82-.24-3.64-.4-5.46v-.04c-.16-1.66-.32-3.32-.51-4.98,0-.16,0-.28-.04-.4,6.72,3.68,13.25,7.75,19.5,12.3,42.16,30.41,68.89,77.79,73.48,129.08Z"
      />
      <path
        fill="#fff"
        d="m388,305.62c-4.11,45.99-26.06,88.9-61.02,119.2l-31.68-43.94c21.16-19.81,34.84-46.51,38.56-75.26h54.14Z"
      />
      <path
        fill="red"
        d="m301.35,443.37c-27.53,16.37-58.73,24.99-91.16,24.99s-63.67-8.62-91.12-24.99l31.72-43.98c18.15,9.89,38.4,15.07,59.4,15.07s41.33-5.18,59.44-15.07l31.72,43.98Z"
      />
      <path
        fill="#fff"
        d="m125.13,380.88l-31.72,43.98c-34.96-30.29-56.91-73.2-61.06-119.24h54.18c3.72,28.75,17.4,55.45,38.6,75.26Z"
      />
      <path
        fill="red"
        d="m128.69,195.52c-1.3,1.15-2.53,2.21-3.76,3.4l-1.19,1.15h-.04c-.47.47-.95.91-1.42,1.38-.43.47-.87.91-1.34,1.38h-.04c-.87.91-1.7,1.78-2.41,2.57-1.54,1.66-3.05,3.4-4.47,5.14-.99,1.15-1.9,2.29-2.85,3.52-.12.16-.28.36-.4.55-1.11,1.42-2.18,2.93-3.2,4.39-.87,1.23-1.66,2.49-2.45,3.72-.43.63-.83,1.27-1.23,1.9-1.78,2.93-3.48,5.93-5.02,9.02-.2.36-.36.71-.51,1.07-.71,1.42-1.38,2.85-2.06,4.31,0,.04-.04.12-.08.2-.67,1.54-1.34,3.12-1.98,4.75-2.29,5.73-4.11,11.67-5.5,17.72-.4,1.54-.71,3.12-.99,4.75-.04.12-.08.28-.08.4-.32,1.5-.55,3.04-.75,4.59-.12.47-.16.91-.2,1.34-.08.4-.16.83-.2,1.23h-54.18c4.59-51.29,31.36-98.71,73.56-129.12,6.25-4.51,12.73-8.62,19.5-12.26-.08.55-.12,1.11-.16,1.66-.24,2.14-.43,4.27-.59,6.41,0,.16-.04.32-.04.43-.36,4.43-.51,8.9-.51,13.37,0,13.88,1.54,27.64,4.59,41.05Z"
      />
      <path
        fill={accentColor}
        d="m301.83,305.62c-4.11,23.77-17.4,45.32-37.25,59.64,0,.04-.04.04-.04.04-.04,0-.04.04-.08.04-15.86,11.43-34.6,17.48-54.26,17.48s-38.4-6.05-54.22-17.48c-.04,0-.08-.04-.12-.08-19.89-14.32-33.22-35.87-37.33-59.64h183.3Z"
      />
      <path
        fill="#e6e6e6"
        d="m192.12,209.4c-18.43,11.11-30.77,41.72-30.77,64.58h-42.83c.24-1.38.51-2.73.79-4.11.59-2.69,1.31-5.38,2.14-7.99.43-1.34.87-2.65,1.34-3.95.4-1.03.79-2.06,1.19-3.08.44-1.03.87-2.06,1.31-3.05.47-1.03.95-2.02,1.42-3.01.44-.99.95-1.98,1.54-2.97.47-.95,1.03-1.94,1.62-2.89,1.11-1.94,2.29-3.8,3.56-5.66.63-.91,1.31-1.82,1.98-2.73.63-.91,1.31-1.78,2.06-2.65.63-.87,1.38-1.74,2.14-2.61.75-.87,1.5-1.7,2.25-2.53v-.04c.59-.59,1.07-1.11,1.62-1.66l.32-.36c.4-.43.83-.87,1.27-1.31l1.46-1.38c3.01-2.77,6.13-5.38,9.33-7.67l9.06-6.53-3.12-10.72c-.51-1.74-.95-3.44-1.42-5.18-1.3-5.22-2.33-10.52-3.08-15.86-.24-1.78-.47-3.56-.67-5.34-.55-5.38-.83-10.8-.83-16.25,0-14.99,2.18-29.82,6.41-43.98,8.58-28.59,25.47-53.71,48.05-71.78-73.04,100.93-18.11,170.69-18.11,170.69Z"
      />
      <path
        fill="#fff"
        d="m301.91,273.99h-140.55c0-22.86,12.34-53.47,30.77-64.58,0,0-54.93-69.76,18.11-170.69,22.5,17.95,39.27,42.87,47.89,71.26.04.16.12.36.16.51,2.14,7.12,3.76,14.36,4.79,21.67,1.11,7.36,1.62,14.79,1.62,22.3,0,14.51-2.02,28.87-6.01,42.63l-.28.95-.04.16-2.81,9.61,8.7,6.29.36.24c.79.55,1.58,1.19,2.41,1.78,2.37,1.82,4.71,3.84,6.96,5.89l.75.79.36.32c.51.47,1.07,1.03,1.54,1.58t.08.04l.28.32c.4.43.83.79,1.31,1.34.16.16.36.36.51.55.36.4.71.75,1.03,1.15.4.4.71.79,1.03,1.15,0,0,.04,0,.04.04.2.24.4.47.59.67.87,1.03,1.74,2.1,2.53,3.16.79,1.11,1.62,2.18,2.37,3.28,3.16,4.43,5.89,9.14,8.11,14.04.55,1.23,1.11,2.45,1.62,3.72.67,1.58,1.31,3.2,1.86,4.82,1.74,4.86,3.05,9.89,3.92,14.99Z"
      />
      <path
        fill="#000"
        d="m241.6,139.64c0,17.32-14.04,31.4-31.36,31.4s-31.4-14.08-31.4-31.4,14.04-31.36,31.4-31.36c.28,0,.59,0,.87.04,5.22,1.42,11.39,9.65,13.33,19.1,1.42,6.96.99,11.94-2.18,17.36.95-.79,1.82-1.7,2.61-2.65,6.05-7.28,7-17.52,3.6-28.04,7.95,5.73,13.13,15.03,13.13,25.55Z"
      />
    </svg>
  );
}
