// export async function fetchVimeoVideo() {
//   const response = await fetch("https://api.vimeo.com/me/videos", {
//     headers: {
//       Authorization: `Bearer ${process.env.VIMEO_ACCESS_TOKEN}`,
//     },
//   });

//   if (!response.ok) {
//     const errorText = await response.text(); // 👈 read the error message
//     console.error("Vimeo API error response:", errorText); // 👈 log it
//     throw new Error("Failed to fetch Vimeo video");
//   }

//   const data = await response.json();
//   return data;
// }
