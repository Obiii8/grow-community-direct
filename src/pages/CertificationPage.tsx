const CertificationPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">
            Certification & Licensing
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-primary">National Food Standards</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Australia</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Food Standards Australia New Zealand (FSANZ)</li>
                    <li>• Australian Certified Organic (ACO)</li>
                    <li>• National Association for Sustainable Agriculture</li>
                    <li>• Safe Food Australia</li>
                  </ul>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">United States</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• USDA Organic Certification</li>
                    <li>• FDA Food Safety Modernization Act</li>
                    <li>• Good Agricultural Practices (GAP)</li>
                    <li>• Hazard Analysis Critical Control Points (HACCP)</li>
                  </ul>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">European Union</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• EU Organic Certification</li>
                    <li>• European Food Safety Authority (EFSA)</li>
                    <li>• General Food Law Regulation</li>
                    <li>• Protected Designation of Origin (PDO)</li>
                  </ul>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Global Standards</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Codex Alimentarius (WHO/FAO)</li>
                    <li>• Global Food Safety Initiative (GFSI)</li>
                    <li>• International Federation of Organic Agriculture</li>
                    <li>• Fair Trade International</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-primary">Platform Compliance</h2>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-muted-foreground mb-4">
                  Freedom Farms is committed to maintaining the highest standards of food safety and quality. 
                  Our platform ensures that all participating farmers and producers meet relevant local and 
                  international certification requirements.
                </p>
                <p className="text-muted-foreground">
                  We regularly update our compliance standards to reflect changes in food safety regulations 
                  and best practices across all markets where we operate.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 text-primary">Contact for Certification Questions</h2>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-muted-foreground">
                  For specific questions about certification requirements or compliance in your region, 
                  please contact our compliance team at 
                  <a href="mailto:compliance@freedomfarms.com" className="text-primary hover:underline ml-1">
                    compliance@freedomfarms.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationPage;