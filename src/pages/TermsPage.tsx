const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">
            Terms and Conditions
          </h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using the Freedom Farms platform, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. Platform Description</h2>
              <p className="text-muted-foreground">
                Freedom Farms is a digital agritech platform that connects farmers, retailers, agents, and consumers 
                in a decentralized food system. We provide tools for marketing, selling, and managing farm operations 
                while facilitating direct connections between food producers and consumers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">3. User Responsibilities</h2>
              <div className="text-muted-foreground space-y-2">
                <p>• Users must provide accurate and truthful information</p>
                <p>• All food safety and quality standards must be maintained</p>
                <p>• Users are responsible for compliance with local regulations</p>
                <p>• Respectful communication and fair trading practices are required</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">4. Privacy Policy</h2>
              <p className="text-muted-foreground">
                We are committed to protecting your privacy. Personal information collected through the platform 
                is used solely for facilitating connections within the food system and improving our services. 
                We do not sell or share personal data with third parties without explicit consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">5. Transaction Terms</h2>
              <p className="text-muted-foreground">
                Freedom Farms facilitates connections but is not directly responsible for transactions between users. 
                All buyers and sellers are responsible for their own agreements, payments, and delivery arrangements. 
                We encourage transparent communication and fair pricing practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">6. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Freedom Farms provides the platform "as is" and makes no warranties regarding the quality, safety, 
                or legality of products or services offered by users. We are not liable for any direct or indirect 
                damages resulting from platform use or user interactions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">7. Modifications to Terms</h2>
              <p className="text-muted-foreground">
                These terms may be updated periodically. Users will be notified of significant changes and continued 
                use of the platform constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">8. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these terms, please contact us at 
                <a href="mailto:legal@freedomfarms.com" className="text-primary hover:underline ml-1">
                  legal@freedomfarms.com
                </a>
              </p>
            </section>

            <div className="bg-muted p-6 rounded-lg mt-12">
              <p className="text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;