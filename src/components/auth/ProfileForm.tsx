
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { UserProfile } from "@/lib/types";
import { Loader2 } from "lucide-react";

export function ProfileForm() {
  const { user, updateProfile } = useAuth();
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    email: "",
    address: "",
  });
  const [newPassword, setNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load profile from localStorage
    const storedProfile = localStorage.getItem("profile");
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await updateProfile(profile, newPassword || undefined);
      setNewPassword(""); // Clear password field after update
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="border border-border bg-card shadow-lg animate-fade-up">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Profile Settings</CardTitle>
        <CardDescription>
          Update your account information and password
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={profile.address}
              onChange={(e) => setProfile({ ...profile, address: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password (optional)</Label>
            <Input
              id="new-password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Leave blank to keep current password"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full bg-tech-600 hover:bg-tech-700"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            Save Changes
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
