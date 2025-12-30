import Image from "next/image"
import Link from "next/link"

export default function TournamentInfo() {
  return (
    <section id="tournament-info" className="py-20 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <h2 className="text-3xl sm:text-4xl font-black text-primary text-center">大会の案内</h2>
            <span className="bg-accent text-white text-sm font-bold px-3 py-1 rounded-full">NEW</span>
          </div>

          <div className="relative w-full max-w-md mx-auto mb-8 rounded-xl overflow-hidden shadow-lg">
            <Image src="/images/20251026.png" alt="大会案内" width={600} height={800} className="w-full h-auto" />
          </div>

          <div className="text-center space-y-6">
            <div className="bg-surface-dark rounded-xl p-6">
              <p className="text-lg font-medium mb-3">申込は下記サイトから！</p>
              <a
                href="https://p4match.com/game/game_detail.php?id=10917"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-white font-bold px-8 py-3 rounded-full hover:bg-accent-light transition-colors shadow-md text-lg"
              >
                大会申込ページへ
              </a>
            </div>

            <Link
              href="/gallery"
              className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary-dark transition-colors shadow-md"
            >
              過去の開催実績・写真ギャラリーはこちら →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
