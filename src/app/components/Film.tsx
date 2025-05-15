export default function Film({ videoId }: { videoId: string }) {
  return (
    <div className="aspect-video w-full max-w-4xl mx-auto my-6">
      <iframe
        src={`https://player.vimeo.com/video/${videoId}`}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="w-full h-full rounded-2xl shadow-lg"
      ></iframe>
    </div>
  );
}
