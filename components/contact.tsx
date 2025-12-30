export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl shadow-lg p-8 sm:p-12 text-center border-2 border-accent/20">
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-6">問い合わせ</h2>

          <p className="text-lg text-text-muted mb-6">お問い合わせは下記メールアドレスまでご連絡ください。</p>

          <a
            href="mailto:htsmiya1025@gmail.com"
            className="inline-block bg-accent text-white font-bold px-10 py-4 rounded-full hover:bg-accent-light transition-all shadow-lg hover:shadow-xl text-xl"
          >
            htsmiya1025@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
