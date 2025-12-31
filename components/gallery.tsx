"use client"

import Image from "next/image"
import { useState } from "react"

export default function Gallery() {
  const [modalImage, setModalImage] = useState<string | null>(null)

  const openModal = (src: string) => {
    setModalImage(src)
  }

  const closeModal = () => {
    setModalImage(null)
  }

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-black text-primary mb-12 text-center">
          過去の開催実績・写真ギャラリー
        </h1>

        {/* 10/26 宮保農場杯 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">10/26：宮保農場杯</h2>
          <p className="text-text-muted mb-6">
            結果URL：
            <a
              href="https://p4match.com/game/game_detail.php?id=10917"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary-dark ml-2"
            >
              こちら
            </a>
          </p>

          {/* 上位トーナメント */}
          <h3 className="text-xl font-bold text-text mb-4 text-center">上位トーナメント</h3>
          <div className="mb-6">
            <div
              className="relative w-full max-w-md mx-auto aspect-[4/3] rounded-lg overflow-hidden shadow-md mb-4 cursor-pointer"
              onClick={() => openModal("/images/jyoui_syousai_20251026.jpg")}
            >
              <Image
                src="images/jyoui_syousai_20251026.jpg"
                alt="上位トーナメント表彰"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
            <p className="text-center text-text-muted">表彰</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="text-center">
              <div
                className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md mb-3 cursor-pointer"
                onClick={() => openModal("/images/20251026_jyoui_1th.jpeg")}
              >
                <Image
                  src="images/20251026_jyoui_1th.jpeg"
                  alt="1位 杉山さん"
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
              <p className="font-bold text-lg">
                <span className="text-accent">🥇</span> 1位 杉山さん
              </p>
            </div>
            <div className="text-center">
              <div
                className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md mb-3 cursor-pointer"
                onClick={() => openModal("/images/20251026_jyoui_2th.jpeg")}
              >
                <Image
                  src="images/20251026_jyoui_2th.jpeg"
                  alt="2位 小松さん"
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
              <p className="font-bold text-lg">
                <span className="text-text-light">🥈</span> 2位 小松さん
              </p>
            </div>
          </div>

          {/* 中位トーナメント */}
          <h3 className="text-xl font-bold text-text mb-4 text-center mt-10">中位トーナメント</h3>
          <div className="mb-6">
            <div
              className="relative w-full max-w-md mx-auto aspect-[4/3] rounded-lg overflow-hidden shadow-md mb-4 cursor-pointer"
              onClick={() => openModal("/images/tyuui_syousai_20251026.jpg")}
            >
              <Image
                src="images/tyuui_syousai_20251026.jpg"
                alt="中位トーナメント表彰"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
            <p className="text-center text-text-muted">表彰</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="text-center">
              <div
                className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md mb-3 cursor-pointer"
                onClick={() => openModal("/images/20251026_tyuui_1th.jpeg")}
              >
                <Image
                  src="images/20251026_tyuui_1th.jpeg"
                  alt="1位 奈良さん"
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
              <p className="font-bold text-lg">
                <span className="text-accent">🥇</span> 1位 奈良さん
              </p>
            </div>
            <div className="text-center">
              <div
                className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md mb-3 cursor-pointer"
                onClick={() => openModal("/images/20251026_tyuui_2th.jpeg")}
              >
                <Image
                  src="images/20251026_tyuui_2th.jpeg"
                  alt="2位 菊地さん"
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
              <p className="font-bold text-lg">
                <span className="text-text-light">🥈</span> 2位 菊地さん
              </p>
            </div>
          </div>

          {/* 下位トーナメント */}
          <h3 className="text-xl font-bold text-text mb-4 text-center mt-10">下位トーナメント</h3>
          <div className="mb-6">
            <div
              className="relative w-full max-w-md mx-auto aspect-[4/3] rounded-lg overflow-hidden shadow-md mb-4 cursor-pointer"
              onClick={() => openModal("/images/kai_syousai_20251026.jpg")}
            >
              <Image
                src="images/kai_syousai_20251026.jpg"
                alt="下位トーナメント表彰"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
            <p className="text-center text-text-muted">表彰</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="text-center">
              <div
                className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md mb-3 cursor-pointer"
                onClick={() => openModal("/images/20251026_kai_1th.jpeg")}
              >
                <Image
                  src="images/20251026_kai_1th.jpeg"
                  alt="1位 山脇さん"
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
              <p className="font-bold text-lg">
                <span className="text-accent">🥇</span> 1位 山脇さん
              </p>
            </div>
            <div className="text-center">
              <div
                className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md mb-3 cursor-pointer"
                onClick={() => openModal("/images/20251026_kai_2th.jpeg")}
              >
                <Image
                  src="images/20251026_kai_2th.jpeg"
                  alt="2位 西澤さん"
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
              <p className="font-bold text-lg">
                <span className="text-text-light">🥈</span> 2位 西澤さん
              </p>
            </div>
          </div>
        </div>

        {/* 09/13 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">09/13：札幌卓球練習会ゲーム練習会</h2>
          <p className="text-text-muted mb-2">札幌市東区民センター（D級以下（初級者以下））</p>
          <p className="text-text-muted mb-6">
            結果URL：
            <a
              href="https://p4match.com/game/game_detail.php?id=10786"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary-dark ml-2"
            >
              こちら
            </a>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="text-center">
              <div
                className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md mb-3 cursor-pointer"
                onClick={() => openModal("/images/29250913_1th.jpg")}
              >
                <Image
                  src="images/29250913_1th.jpg"
                  alt="1位 山内さん"
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
              <p className="font-bold text-lg">
                <span className="text-accent">🥇</span> 1位 山内さん
              </p>
            </div>
            <div className="text-center">
              <div
                className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md mb-3 cursor-pointer"
                onClick={() => openModal("/images/20250913_2th.jpg")}
              >
                <Image
                  src="images/20250913_2th.jpg"
                  alt="2位 匿名希望さん"
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
              <p className="font-bold text-lg">
                <span className="text-text-light">🥈</span> 2位 匿名希望さん
              </p>
            </div>
          </div>
        </div>

        {/* 09/06 */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-primary mb-4">09/06：札幌市菊水元町地区センターゲーム練習会</h2>
          <p className="text-text-muted mb-6">
            結果URL：
            <a
              href="https://p4match.com/game/game_detail.php?id=10621"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary-dark ml-2"
            >
              こちら
            </a>
          </p>

          {/* リーグ1 */}
          <h3 className="text-xl font-bold text-text mb-4 text-center">リーグ1</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="text-center">
              <div
                className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md mb-3 cursor-pointer"
                onClick={() => openModal("/images/20250906_r1_1th.jpeg")}
              >
                <Image
                  src="images/20250906_r1_1th.jpeg"
                  alt="1位 杉山さん"
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
              <p className="font-bold text-lg">
                <span className="text-accent">🥇</span> 1位 杉山さん
              </p>
            </div>
            <div className="text-center">
              <div
                className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md mb-3 cursor-pointer"
                onClick={() => openModal("/images/20250906_r1_2th.jpeg")}
              >
                <Image
                  src="images/20250906_r1_2th.jpeg"
                  alt="2位 岩城さん"
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
              <p className="font-bold text-lg">
                <span className="text-text-light">🥈</span> 2位 岩城さん
              </p>
            </div>
          </div>

          {/* リーグ2 */}
          <h3 className="text-xl font-bold text-text mb-4 text-center mt-10">リーグ2</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="text-center">
              <div
                className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md mb-3 cursor-pointer"
                onClick={() => openModal("/images/20250906_r2_1th.jpeg")}
              >
                <Image
                  src="/images/20250906_r2_2th.jpeg"
                  alt="1位 奈良さん"
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
              <p className="font-bold text-lg">
                <span className="text-accent">🥇</span> 1位 奈良さん
              </p>
            </div>
            <div className="text-center">
              <div
                className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md mb-3 cursor-pointer"
                onClick={() => openModal("/images/20250906_r2_2th.jpeg")}
              >
                <Image
                  src="/images/20250906_r2_2th.jpeg"
                  alt="2位 小山さん"
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
              <p className="font-bold text-lg">
                <span className="text-text-light">🥈</span> 2位 小山さん
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div className="image-modal active" onClick={closeModal}>
          <span className="close-modal">&times;</span>
          <img src={modalImage || "/placeholder.svg"} alt="拡大画像" className="modal-content" />
        </div>
      )}
    </>
  )
}
