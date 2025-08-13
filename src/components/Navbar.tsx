import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Building2, Smartphone } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export const Navbar = () => {
  const { user, profile, signOut } = useAuth();

  return (
    <nav className="bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Side - Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">wellfinds</span>
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground font-medium"
              >
                🏠 Home
              </Link>
              <Link
                to="/find-shops"
                className="text-muted-foreground hover:text-foreground font-medium"
              >
                🏪 Find Shops
              </Link>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-1">
              <Smartphone className="h-4 w-4" />
              <span>Get App</span>
            </Button>
            
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">{user.email}</span>
                <Button variant="outline" size="sm" onClick={signOut}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button asChild variant="outline" size="sm">
                <Link to="/auth/signin">Sign in / Register</Link>
              </Button>
            )}
            
            <div className="relative">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-medium">
                <Link to="/list-&-get-pos-website">
                  Get Online Shop Website + POS
                </Link>
              </Button>
              <Badge className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs px-2 py-0">
                New
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};