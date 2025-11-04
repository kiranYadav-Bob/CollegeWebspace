
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Upload, ArrowRight, ArrowLeft } from "lucide-react";

export default function AdmissionsApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    
    // Program Information
    programType: "",
    programName: "",
    startTerm: "",
    
    // Educational Background
    highSchool: "",
    graduationYear: "",
    gpa: "",
    hasUndergrad: false,
    undergradInstitution: "",
    undergradDegree: "",
    undergradGPA: "",
    
    // Additional Information
    statementOfPurpose: "",
    achievements: "",
    
    // Documents
    transcript: null as File | null,
    recommendationLetter: null as File | null,
    
    // Agreement
    agreeToTerms: false,
  });

  const { toast } = useToast();
  const totalSteps = 5;

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field: string, file: File | null) => {
    updateFormData(field, file);
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.dateOfBirth || !formData.gender || !formData.nationality) {
          toast({
            title: "Missing Information",
            description: "Please fill in all required fields.",
            variant: "destructive",
          });
          return false;
        }
        break;
      case 2:
        if (!formData.programType || !formData.programName || !formData.startTerm) {
          toast({
            title: "Missing Information",
            description: "Please select your program details.",
            variant: "destructive",
          });
          return false;
        }
        break;
      case 3:
        if (!formData.highSchool || !formData.graduationYear || !formData.gpa) {
          toast({
            title: "Missing Information",
            description: "Please complete your educational background.",
            variant: "destructive",
          });
          return false;
        }
        break;
      case 4:
        if (!formData.statementOfPurpose || formData.statementOfPurpose.length < 100) {
          toast({
            title: "Statement Too Short",
            description: "Please write at least 100 characters for your statement of purpose.",
            variant: "destructive",
          });
          return false;
        }
        break;
      case 5:
        if (!formData.agreeToTerms) {
          toast({
            title: "Terms Required",
            description: "Please agree to the terms and conditions.",
            variant: "destructive",
          });
          return false;
        }
        break;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (validateStep(currentStep)) {
      try {
        const response = await fetch('/api/applications', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            dateOfBirth: formData.dateOfBirth,
            gender: formData.gender,
            nationality: formData.nationality,
            programType: formData.programType,
            programName: formData.programName,
            startTerm: formData.startTerm,
            highSchool: formData.highSchool,
            graduationYear: formData.graduationYear,
            gpa: formData.gpa,
            hasUndergrad: formData.hasUndergrad ? "yes" : "no",
            undergradInstitution: formData.undergradInstitution || null,
            undergradDegree: formData.undergradDegree || null,
            undergradGPA: formData.undergradGPA || null,
            statementOfPurpose: formData.statementOfPurpose,
            achievements: formData.achievements || null,
          }),
        });

        const result = await response.json();

        if (result.success) {
          toast({
            title: "Application Submitted!",
            description: "We've received your application. You'll hear from us soon.",
          });
          // Reset form
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            dateOfBirth: "",
            gender: "",
            nationality: "",
            programType: "",
            programName: "",
            startTerm: "",
            highSchool: "",
            graduationYear: "",
            gpa: "",
            hasUndergrad: false,
            undergradInstitution: "",
            undergradDegree: "",
            undergradGPA: "",
            statementOfPurpose: "",
            achievements: "",
            transcript: null,
            recommendationLetter: null,
            agreeToTerms: false,
          });
          setCurrentStep(1);
        } else {
          toast({
            title: "Submission Failed",
            description: result.error || "Please try again later.",
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to submit application. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="border-b bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Apply Online
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Complete your application in just a few steps. All fields marked with * are required.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Step {currentStep} of {totalSteps}</span>
                <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
              
              <div className="flex justify-between mt-4 text-xs text-muted-foreground">
                <span className={currentStep >= 1 ? "text-primary font-medium" : ""}>Personal</span>
                <span className={currentStep >= 2 ? "text-primary font-medium" : ""}>Program</span>
                <span className={currentStep >= 3 ? "text-primary font-medium" : ""}>Education</span>
                <span className={currentStep >= 4 ? "text-primary font-medium" : ""}>Statement</span>
                <span className={currentStep >= 5 ? "text-primary font-medium" : ""}>Review</span>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>
                  {currentStep === 1 && "Personal Information"}
                  {currentStep === 2 && "Program Selection"}
                  {currentStep === 3 && "Educational Background"}
                  {currentStep === 4 && "Statement & Achievements"}
                  {currentStep === 5 && "Review & Submit"}
                </CardTitle>
                <CardDescription>
                  {currentStep === 1 && "Tell us about yourself"}
                  {currentStep === 2 && "Choose your desired program"}
                  {currentStep === 3 && "Share your academic history"}
                  {currentStep === 4 && "Express your motivation and accomplishments"}
                  {currentStep === 5 && "Review your application before submitting"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => updateFormData("firstName", e.target.value)}
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => updateFormData("lastName", e.target.value)}
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        placeholder="john.doe@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="nationality">Nationality *</Label>
                        <Input
                          id="nationality"
                          value={formData.nationality}
                          onChange={(e) => updateFormData("nationality", e.target.value)}
                          placeholder="United States"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Gender *</Label>
                      <RadioGroup value={formData.gender} onValueChange={(value) => updateFormData("gender", value)}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="male" id="male" />
                          <Label htmlFor="male" className="font-normal cursor-pointer">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="female" id="female" />
                          <Label htmlFor="female" className="font-normal cursor-pointer">Female</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other" className="font-normal cursor-pointer">Other</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                )}

                {/* Step 2: Program Selection */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="programType">Program Type *</Label>
                      <Select value={formData.programType} onValueChange={(value) => updateFormData("programType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select program type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="undergraduate">Undergraduate</SelectItem>
                          <SelectItem value="postgraduate">Postgraduate</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="programName">Program Name *</Label>
                      <Select value={formData.programName} onValueChange={(value) => updateFormData("programName", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your program" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cs">Computer Science</SelectItem>
                          <SelectItem value="ee">Electrical Engineering</SelectItem>
                          <SelectItem value="me">Mechanical Engineering</SelectItem>
                          <SelectItem value="business">Business Administration</SelectItem>
                          <SelectItem value="economics">Economics</SelectItem>
                          <SelectItem value="biology">Biology</SelectItem>
                          <SelectItem value="chemistry">Chemistry</SelectItem>
                          <SelectItem value="physics">Physics</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="startTerm">Intended Start Term *</Label>
                      <Select value={formData.startTerm} onValueChange={(value) => updateFormData("startTerm", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select term" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fall-2025">Fall 2025</SelectItem>
                          <SelectItem value="spring-2026">Spring 2026</SelectItem>
                          <SelectItem value="fall-2026">Fall 2026</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 3: Educational Background */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="highSchool">High School Name *</Label>
                      <Input
                        id="highSchool"
                        value={formData.highSchool}
                        onChange={(e) => updateFormData("highSchool", e.target.value)}
                        placeholder="Lincoln High School"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="graduationYear">Graduation Year *</Label>
                        <Input
                          id="graduationYear"
                          type="number"
                          value={formData.graduationYear}
                          onChange={(e) => updateFormData("graduationYear", e.target.value)}
                          placeholder="2024"
                          min="1950"
                          max="2030"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gpa">GPA / Percentage *</Label>
                        <Input
                          id="gpa"
                          value={formData.gpa}
                          onChange={(e) => updateFormData("gpa", e.target.value)}
                          placeholder="3.8 or 85%"
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 py-2">
                      <Checkbox
                        id="hasUndergrad"
                        checked={formData.hasUndergrad}
                        onCheckedChange={(checked) => updateFormData("hasUndergrad", checked)}
                      />
                      <Label htmlFor="hasUndergrad" className="font-normal cursor-pointer">
                        I have completed undergraduate studies
                      </Label>
                    </div>

                    {formData.hasUndergrad && (
                      <div className="space-y-4 border-l-2 pl-4">
                        <div className="space-y-2">
                          <Label htmlFor="undergradInstitution">Institution Name</Label>
                          <Input
                            id="undergradInstitution"
                            value={formData.undergradInstitution}
                            onChange={(e) => updateFormData("undergradInstitution", e.target.value)}
                            placeholder="University Name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="undergradDegree">Degree Obtained</Label>
                          <Input
                            id="undergradDegree"
                            value={formData.undergradDegree}
                            onChange={(e) => updateFormData("undergradDegree", e.target.value)}
                            placeholder="Bachelor of Science in Computer Science"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="undergradGPA">GPA</Label>
                          <Input
                            id="undergradGPA"
                            value={formData.undergradGPA}
                            onChange={(e) => updateFormData("undergradGPA", e.target.value)}
                            placeholder="3.5"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 4: Statement & Achievements */}
                {currentStep === 4 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="statementOfPurpose">Statement of Purpose *</Label>
                      <Textarea
                        id="statementOfPurpose"
                        value={formData.statementOfPurpose}
                        onChange={(e) => updateFormData("statementOfPurpose", e.target.value)}
                        placeholder="Explain your motivation for applying and your career goals (minimum 100 characters)..."
                        className="min-h-[200px]"
                      />
                      <p className="text-xs text-muted-foreground">
                        {formData.statementOfPurpose.length} / 100 minimum characters
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="achievements">Achievements & Extracurricular Activities</Label>
                      <Textarea
                        id="achievements"
                        value={formData.achievements}
                        onChange={(e) => updateFormData("achievements", e.target.value)}
                        placeholder="List your notable achievements, awards, volunteer work, leadership roles, etc."
                        className="min-h-[150px]"
                      />
                    </div>

                    <div className="space-y-4 pt-4 border-t">
                      <h3 className="font-medium">Upload Documents</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="transcript">Academic Transcript (Optional)</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            id="transcript"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => handleFileUpload("transcript", e.target.files?.[0] || null)}
                          />
                          {formData.transcript && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="recommendationLetter">Recommendation Letter (Optional)</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            id="recommendationLetter"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => handleFileUpload("recommendationLetter", e.target.files?.[0] || null)}
                          />
                          {formData.recommendationLetter && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Review & Submit */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Personal Information</h3>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="text-muted-foreground">Name:</div>
                          <div>{formData.firstName} {formData.lastName}</div>
                          <div className="text-muted-foreground">Email:</div>
                          <div>{formData.email}</div>
                          <div className="text-muted-foreground">Phone:</div>
                          <div>{formData.phone}</div>
                          <div className="text-muted-foreground">Date of Birth:</div>
                          <div>{formData.dateOfBirth}</div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Program Selection</h3>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="text-muted-foreground">Program Type:</div>
                          <div className="capitalize">{formData.programType}</div>
                          <div className="text-muted-foreground">Program:</div>
                          <div>{formData.programName}</div>
                          <div className="text-muted-foreground">Start Term:</div>
                          <div>{formData.startTerm}</div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Educational Background</h3>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="text-muted-foreground">High School:</div>
                          <div>{formData.highSchool}</div>
                          <div className="text-muted-foreground">GPA:</div>
                          <div>{formData.gpa}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 py-4 border-t">
                      <Checkbox
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => updateFormData("agreeToTerms", checked)}
                      />
                      <Label htmlFor="agreeToTerms" className="font-normal text-sm cursor-pointer">
                        I hereby confirm that all information provided is accurate and complete. I agree to the terms and conditions of Excellence University admissions process. *
                      </Label>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                  
                  {currentStep < totalSteps ? (
                    <Button onClick={nextStep}>
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button onClick={handleSubmit} className="bg-primary">
                      Submit Application
                      <CheckCircle2 className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
