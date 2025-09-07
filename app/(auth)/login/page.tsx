import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-navy-900 tracking-wide mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your ALX Polly account</p>
        </div>
        
        <Card className="shadow-card">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-navy-900">Sign In</CardTitle>
            <CardDescription className="text-gray-600">
              Enter your credentials to access your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="you@example.com" 
                className="text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Enter your password"
                className="text-base"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-cyan-500 focus:ring-cyan-500" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <Link href="#" className="text-cyan-500 hover:text-cyan-600 font-medium">
                Forgot password?
              </Link>
            </div>
          </CardContent>
          <CardFooter className="flex-col space-y-4">
            <Button type="submit" className="w-full" size="lg">
              Sign In
            </Button>
            <p className="text-sm text-gray-600 text-center">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-cyan-500 hover:text-cyan-600 font-medium">
                Create one
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}


