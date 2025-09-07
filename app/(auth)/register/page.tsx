import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-navy-900 tracking-wide mb-2">Join ALX Polly</h1>
          <p className="text-gray-600">Create your account and start polling</p>
        </div>
        
        <Card className="shadow-card">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-navy-900">Create Account</CardTitle>
            <CardDescription className="text-gray-600">
              Start creating and voting on professional polls
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                Full Name
              </Label>
              <Input 
                id="name" 
                placeholder="Ada Lovelace" 
                className="text-base"
              />
            </div>
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
                placeholder="Create a strong password"
                className="text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                Confirm Password
              </Label>
              <Input 
                id="confirmPassword" 
                type="password" 
                placeholder="Confirm your password"
                className="text-base"
              />
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="rounded border-gray-300 text-cyan-500 focus:ring-cyan-500" />
              <span className="text-gray-600">
                I agree to the{" "}
                <Link href="#" className="text-cyan-500 hover:text-cyan-600 font-medium">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-cyan-500 hover:text-cyan-600 font-medium">
                  Privacy Policy
                </Link>
              </span>
            </div>
          </CardContent>
          <CardFooter className="flex-col space-y-4">
            <Button type="submit" className="w-full" size="lg">
              Create Account
            </Button>
            <p className="text-sm text-gray-600 text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-cyan-500 hover:text-cyan-600 font-medium">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}


