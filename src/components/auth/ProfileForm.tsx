
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { UserProfile } from "@/lib/types";
import { Loader2, Check, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export function ProfileForm() {
  const { user, updateProfile } = useAuth();
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    email: "",
    address: "",
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    // Load profile from localStorage
    const storedProfile = localStorage.getItem("profile");
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const validatePasswordChange = () => {
    const errors = {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    };
    let isValid = true;

    // Only validate if user is trying to change password
    if (passwordData.newPassword || passwordData.confirmPassword || passwordData.currentPassword) {
      // Check if current password is provided
      if (!passwordData.currentPassword) {
        errors.currentPassword = "Current password is required";
        isValid = false;
      }

      // Check if new password is provided and meets requirements
      if (!passwordData.newPassword) {
        errors.newPassword = "New password is required";
        isValid = false;
      } else if (passwordData.newPassword.length < 6) {
        errors.newPassword = "Password must be at least 6 characters";
        isValid = false;
      }

      // Check if passwords match
      if (passwordData.newPassword !== passwordData.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
        isValid = false;
      }
    }

    setPasswordErrors(errors);
    return isValid;
  };

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await updateProfile(profile);
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePasswordChange()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Verify current password matches stored password
      const storedPassword = localStorage.getItem("password");
      if (passwordData.currentPassword !== storedPassword) {
        setPasswordErrors({
          ...passwordErrors,
          currentPassword: "Current password is incorrect"
        });
        setIsLoading(false);
        return;
      }
      
      // Update password
      await updateProfile(profile, passwordData.newPassword);
      
      // Clear password fields
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      });
      
      toast.success("Password updated successfully");
    } catch (error) {
      toast.error("Failed to update password");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeQuickLinks = () => {
    // Navigate to QuickLinks management in the editor
    window.location.href = "/editor";
  };

  return (
    <div className="space-y-8">
      <Card className="border border-border bg-card shadow-lg animate-fade-up">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Profile Settings</CardTitle>
          <CardDescription>
            Update your account information
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleProfileSubmit}>
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
          </CardContent>
          <CardFooter>
            <Button 
              type="submit" 
              className="w-full bg-tech-600 hover:bg-tech-700"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Check className="mr-2 h-4 w-4" />
              )}
              Save Profile Changes
            </Button>
          </CardFooter>
        </form>
      </Card>

      <Card className="border border-border bg-card shadow-lg animate-fade-up">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Change Password</CardTitle>
          <CardDescription>
            Update your password
          </CardDescription>
        </CardHeader>
        <form onSubmit={handlePasswordSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input
                id="current-password"
                type="password"
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
              />
              {passwordErrors.currentPassword && (
                <p className="text-destructive text-sm flex items-center gap-1 mt-1">
                  <AlertCircle className="h-4 w-4" />
                  {passwordErrors.currentPassword}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                type="password"
                value={passwordData.newPassword}
                onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
              />
              {passwordErrors.newPassword && (
                <p className="text-destructive text-sm flex items-center gap-1 mt-1">
                  <AlertCircle className="h-4 w-4" />
                  {passwordErrors.newPassword}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input
                id="confirm-password"
                type="password"
                value={passwordData.confirmPassword}
                onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
              />
              {passwordErrors.confirmPassword && (
                <p className="text-destructive text-sm flex items-center gap-1 mt-1">
                  <AlertCircle className="h-4 w-4" />
                  {passwordErrors.confirmPassword}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              Update Password
            </Button>
          </CardFooter>
        </form>
      </Card>
      
      <Card className="border border-border bg-card shadow-lg animate-fade-up">
        <CardHeader className="space-y-1">
          <CardTitle className="text-xl font-bold">Site Navigation</CardTitle>
          <CardDescription>
            Manage your site's navigation quick links
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            You can manage your site's navigation quick links in the editor section.
          </p>
        </CardContent>
        <CardFooter>
          <Button 
            onClick={handleChangeQuickLinks}
            className="w-full"
            variant="outline"
          >
            Manage Quick Links
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
