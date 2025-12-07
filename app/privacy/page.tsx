export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 md:px-6 py-12 max-w-3xl">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: December 7, 2024</p>
          </div>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">1. Introduction</h2>
            <p className="text-muted-foreground">
              PhotoMaster ("we", "us", "our", or "Company") operates the photomaster.app website (the "Service"). This
              page informs you of our policies regarding the collection, use, and disclosure of personal data when you
              use our Service and the choices you have associated with that data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">2. Information Collection and Use</h2>
            <p className="text-muted-foreground">
              We collect several different types of information for various purposes to provide and improve our Service
              to you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Personal Data (name, email address, account credentials)</li>
              <li>Usage Data (browser type, IP address, pages visited, time and date)</li>
              <li>Cookies and tracking technologies</li>
              <li>Photos and edits you create on our platform</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">3. Use of Data</h2>
            <p className="text-muted-foreground">PhotoMaster uses the collected data for various purposes:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features</li>
              <li>To provide customer care and support</li>
              <li>To gather analysis or valuable information for improving our Service</li>
              <li>To monitor the usage of our Service</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">4. Security of Data</h2>
            <p className="text-muted-foreground">
              The security of your data is important to us, but remember that no method of transmission over the
              Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable
              means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">5. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at privacy@photomaster.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
