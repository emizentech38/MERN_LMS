import { GraduationCap } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs , TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import CommonForm from "../../components/common-form";
import { signInFormControls, signUpFormControls } from "../../config";

function AuthPage() {
  const [activeTab, setActiveTab] = useState("singin");

  function handleTabChange(value) {
    setActiveTab(value);
  }

  return (
    <div className="flex flex-col min-h-screen ">
      {/* header */}
      <header className="px -4 lg:px-6 h-14 flex items-center border-b">
        <Link to={"/"} className="flex item-center justify-center">
          <GraduationCap className="h-8 w-8 mr-4" />
          <span className="font-extrabold text-xl">LMS LEARN</span>
        </Link>
      </header>
      {/* signIn & singUp */}
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Tabs
          value={activeTab}
          defaultValue="singin"
          onValueChange={handleTabChange}
          className="w-full max-w-md"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
          <CommonForm formControls={signInFormControls} />
          </TabsContent>
          <TabsContent value="signup">
            <CommonForm formControls={signUpFormControls} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default AuthPage;
