
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { User, LoginCredentials, UserProfile } from "@/lib/types";
import { toast } from "sonner";

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<boolean>;
  logout: () => void;
  updateProfile: (profile: UserProfile, password?: string) => Promise<boolean>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Initial user data
const DEFAULT_USER: User = {
  id: "1",
  name: "Johannes Nguyen",
  email: "johannes.quangminh.nguyen@gmail.com",
  role: "admin",
};

// Initial profile data
const DEFAULT_PROFILE: UserProfile = {
  name: "Johannes Nguyen",
  email: "johannes.quangminh.nguyen@gmail.com",
  address: "Heinrich-böll-straße 28, 68723 Oftersheim",
};

// Default password (in a real app, this would be properly hashed and not stored in code)
const DEFAULT_PASSWORD = "admin123";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Save profile to localStorage
  const saveProfile = (profile: UserProfile) => {
    localStorage.setItem("profile", JSON.stringify(profile));
  };

  // Get profile from localStorage or use default
  const getProfile = (): UserProfile => {
    const storedProfile = localStorage.getItem("profile");
    if (!storedProfile) {
      saveProfile(DEFAULT_PROFILE);
      return DEFAULT_PROFILE;
    }
    return JSON.parse(storedProfile);
  };

  // Login function
  const login = async (credentials: LoginCredentials): Promise<boolean> => {
    // In a real app, this would send a request to an API
    try {
      // Simple validation for demonstration
      const profile = getProfile();
      
      if (credentials.email === profile.email && credentials.password === (localStorage.getItem("password") || DEFAULT_PASSWORD)) {
        const loggedInUser: User = {
          ...DEFAULT_USER,
          name: profile.name,
          email: profile.email,
        };
        
        setUser(loggedInUser);
        localStorage.setItem("user", JSON.stringify(loggedInUser));
        toast.success("Login successful");
        return true;
      } else {
        toast.error("Invalid email or password");
        return false;
      }
    } catch (error) {
      toast.error("Login failed");
      return false;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
  };

  // Update profile function
  const updateProfile = async (profile: UserProfile, password?: string): Promise<boolean> => {
    try {
      // Update profile in localStorage
      saveProfile(profile);
      
      // Update password if provided
      if (password && password.trim() !== "") {
        localStorage.setItem("password", password);
      }
      
      // Update user data if logged in
      if (user) {
        const updatedUser = {
          ...user,
          name: profile.name,
          email: profile.email,
        };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
      }
      
      return true;
    } catch (error) {
      console.error("Failed to update profile:", error);
      return false;
    }
  };

  // Initialize default password if not set
  useEffect(() => {
    if (!localStorage.getItem("password")) {
      localStorage.setItem("password", DEFAULT_PASSWORD);
    }
    
    // Initialize profile if not set
    if (!localStorage.getItem("profile")) {
      localStorage.setItem("profile", JSON.stringify(DEFAULT_PROFILE));
    }
  }, []);

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    updateProfile,
  };

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
