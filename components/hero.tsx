import Image from "next/image"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="images/practice.jpg" alt="卓球練習風景" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight text-balance">
          札幌でひとりで気軽に参加できる
          <br />
          卓球練習会・大会
        </h1>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">札幌卓球練習会とは・・・</h2>
          <p className="text-xl text-white font-medium mb-2">
            １人だけど卓球を再開したい、
            <br className="sm:hidden" />
            もっとたくさん練習したい人むけの練習会です。
          </p>
          <p className="text-lg text-white/90 leading-relaxed">
            平日１回、土日１回を目標に練習会を開催しています。
            <br />
            練習は5分交代で課題練習をします。それを参加者全員と行います。
            <br />
            遅れての参加や途中退室もOKですのでお気軽にご参加ください。
          </p>
        </div>

        {/* YouTube Video */}
        <div className="max-w-3xl mx-auto">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/g7IhzqLGkII"
              title="札幌卓球練習会の様子"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
