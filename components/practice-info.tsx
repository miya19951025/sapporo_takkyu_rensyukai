import Image from "next/image"

export default function PracticeInfo() {
  return (
    <section id="practice-info" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-8 text-center">練習会の案内</h2>

          <div className="space-y-4 mb-10 text-lg">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 p-4 bg-surface rounded-lg">
              <span className="font-bold text-primary min-w-[100px]">場所：</span>
              <span className="text-text">中央区・東区・豊平区などの区民センター</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 p-4 bg-surface rounded-lg">
              <span className="font-bold text-primary min-w-[100px]">日時：</span>
              <span className="text-text">平日金曜日１９時～２１時・土曜日９時～１２時が多いです</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 p-4 bg-surface rounded-lg">
              <span className="font-bold text-primary min-w-[100px]">参加費：</span>
              <span className="text-text font-bold text-accent">500円</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 p-4 bg-surface rounded-lg">
              <span className="font-bold text-primary min-w-[100px]">対象者：</span>
              <span className="text-text">ゲーム練習ができるかた（年齢制限はありません）</span>
            </div>
          </div>

          <div className="bg-accent/10 rounded-xl p-6 sm:p-8 border-2 border-accent/20">
            <h3 className="text-2xl font-bold text-accent mb-6 text-center">参加方法</h3>

            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-lg font-medium mb-3">
                  <span className="inline-block bg-accent text-white w-8 h-8 rounded-full text-center leading-8 mr-3 font-bold">
                    1
                  </span>
                  LINEオープンチャットに参加する
                </p>
                <a
                  href="https://t.co/GAa19JSPLx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-primary-dark transition-colors font-medium break-all"
                >
                  https://t.co/GAa19JSPLx
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-lg font-medium mb-4">
                  <span className="inline-block bg-accent text-white w-8 h-8 rounded-full text-center leading-8 mr-3 font-bold">
                    2
                  </span>
                  オープンチャットの右上にある三本線をタップ
                </p>
                <div className="relative w-full max-w-xs mx-auto aspect-[9/16] rounded-lg overflow-hidden shadow-md">
                  <Image src="images/line1.png" alt="オープンチャット三本線" fill className="object-contain" />
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-lg font-medium mb-4">
                  <span className="inline-block bg-accent text-white w-8 h-8 rounded-full text-center leading-8 mr-3 font-bold">
                    3
                  </span>
                  イベントをタップ
                </p>
                <div className="relative w-full max-w-xs mx-auto aspect-[9/16] rounded-lg overflow-hidden shadow-md">
                  <Image src="images/line2.png" alt="イベントをタップ" fill className="object-contain" />
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-lg font-medium mb-4">
                  <span className="inline-block bg-accent text-white w-8 h-8 rounded-full text-center leading-8 mr-3 font-bold">
                    4
                  </span>
                  オープンチャットの右上にある三本線をタップ
                </p>
                <div className="relative w-full max-w-xs mx-auto aspect-[9/16] rounded-lg overflow-hidden shadow-md">
                  <Image src="images/line3.png" alt="再度三本線をタップ" fill className="object-contain" />
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-lg font-medium mb-4">
                  <span className="inline-block bg-accent text-white w-8 h-8 rounded-full text-center leading-8 mr-3 font-bold">
                    5
                  </span>
                  参加をタップ
                </p>
                <p className="text-sm text-text-muted mb-4">※参加するときのみボタンを押してください</p>
                <div className="relative w-full max-w-xs mx-auto aspect-[9/16] rounded-lg overflow-hidden shadow-md">
                  <Image src="images/line4.png" alt="参加をタップ" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
