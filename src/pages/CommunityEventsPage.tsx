import { Button } from "@/components/ui/button";

const CommunityEventsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8 text-foreground">
            Next Community Event Coming Soon
          </h1>
          
          <p className="text-xl mb-12 text-muted-foreground">
            RSVP to freedomfarm@gmail.com with the following details:
          </p>

          <div className="bg-muted p-8 rounded-lg shadow-card">
            <h2 className="text-2xl font-semibold mb-6 text-primary">RSVP Information Required</h2>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div className="p-4 bg-background rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Name</h3>
                  <p className="text-muted-foreground">Your full name</p>
                </div>
                
                <div className="p-4 bg-background rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">Contact email address</p>
                </div>
                
                <div className="p-4 bg-background rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Phone Number</h3>
                  <p className="text-muted-foreground">Mobile or landline</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-background rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground">Your location</p>
                </div>
                
                <div className="p-4 bg-background rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Occupation</h3>
                  <p className="text-muted-foreground">What you do for work</p>
                </div>
                
                <div className="p-4 bg-background rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Dietary Requirements</h3>
                  <p className="text-muted-foreground">Any food allergies or preferences</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button 
                size="lg" 
                className="bg-community hover:bg-community/90"
                onClick={() => window.location.href = 'mailto:freedomfarm@gmail.com?subject=Community Event RSVP'}
              >
                Send RSVP Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityEventsPage;