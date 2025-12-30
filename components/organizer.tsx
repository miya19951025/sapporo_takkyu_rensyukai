import Image from "next/image"

export default function Organizer() {
  return (
    <section id="organizer" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl shadow-lg p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-10 text-center">主催者紹介</h2>

          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-xl ring-4 ring-primary/20 flex-shrink-0">
              <Image src="/images/myprof.jpeg" alt="主催者 宮保" fill className="object-cover" />
            </div>

            <div className="flex-1 space-y-4 text-center sm:text-left">
              <h3 className="text-2xl font-bold text-primary">宮保</h3>

              <div className="space-y-2 text-lg">
                <p className="flex flex-col sm:flex-row sm:gap-3">
                  <span className="font-bold text-text-muted min-w-[100px]">出身：</span>
                  <span className="text-text">北海道十勝</span>
                </p>
                <p className="flex flex-col sm:flex-row sm:gap-3">
                  <span className="font-bold text-text-muted min-w-[100px]">年齢：</span>
                  <span className="text-text">平成７年生まれ 29歳</span>
                </p>
                <p className="flex flex-col sm:flex-row sm:gap-3">
                  <span className="font-bold text-text-muted min-w-[100px]">卓球歴：</span>
                  <span className="text-text">中学生から初めて途中でブランクが少しあり１５年程</span>
                </p>
                <p className="flex flex-col sm:flex-row sm:gap-3">
                  <span className="font-bold text-text-muted min-w-[100px]">戦型：</span>
                  <span className="text-text font-bold text-accent">右ペン粒</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
