import { useState, useEffect } from 'react';
import { Upload, FileText, Check } from 'lucide-react';
import heroImage from '~/components/images/image1.avif';

const RequestForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        country: '',
        email: '',
        phoneNumber: '',
        reasonForRequest: '',
        verificationDocuments: false,
        requestedDocument: '',
        instructions: ''
    });

    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [serviceType, setServiceType] = useState('court-search'); // Default service type
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    // Get service type from URL parameters
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const service = params.get('service');
        if (service) {
            setServiceType(service);
        }
    }, []);

    // Get service-specific content
    const getServiceContent = () => {
        switch (serviceType) {
            case 'court-search':
                return {
                    title: 'Request Court Search',
                    description: 'Fill out the form below to request court searches',
                };
            case 'document-request':
                return {
                    title: 'Request for Court Documents',
                    description: 'Fill out the form below to request court documents',
                };
            case 'document-verification':
                return {
                    title: 'Verify Court Documents',
                    description: 'Fill out the form below to verify court documents',
                };
            default:
                return {
                    title: 'Request Court Search',
                    description: 'Fill out the form below to request court searches',
                };
        }
    };

    const serviceContent = getServiceContent();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const target = e.target as HTMLInputElement;
            setFormData(prev => ({
                ...prev,
                [name]: target.checked
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            setUploadedFiles(prev => [...prev, ...Array.from(files)]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            // Prepare data for API
            const emailData = {
                ...formData,
                serviceType,
                fileCount: uploadedFiles.length
            };

            // Call the SMTP API
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(emailData)
            });

            const result = await response.json();

            if (result.success) {
                setSubmitMessage(result.message);
                
                // Reset form
                setFormData({
                    name: '',
                    country: '',
                    email: '',
                    phoneNumber: '',
                    reasonForRequest: '',
                    verificationDocuments: false,
                    requestedDocument: '',
                    instructions: ''
                });
                setUploadedFiles([]);
            } else {
                setSubmitMessage(result.message || 'There was an error submitting your request. Please try again.');
            }
        } catch (error) {
            console.error('Submission failed:', error);
            setSubmitMessage('There was an error submitting your request. Please try again or contact us directly at gyankwadwomends2001@gmail.com');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation Header */}

            {/* hero section */}
            <div style={{ backgroundImage: `url(${heroImage})` }} className="container  bg-cover bg-center bg-no-repeat py-4 w-full h-[80vh] absolute top-0 left-0">

            </div>


            <div className="flex flex-col lg:flex-row px-4 lg:px-60 relative z-10 mt-20 lg:mt-40">
                {/* Left Sidebar */}
                <div className="w-full lg:w-1/3 bg-gradient-to-br rounded-t-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-tr-none from-blue-400 to-blue-600 flex items-center justify-center py-8 lg:py-0">
                    <div className="text-center text-white px-8">
                        <div className="mb-8">
                            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileText className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <h1 className="text-2xl lg:text-3xl font-bold mb-4">
                            Welcome to<br />
                            <span className="text-3xl lg:text-4xl">SVD Services</span>
                        </h1>
                        <p className="text-blue-100 text-base lg:text-lg leading-relaxed">
                            Your trusted partner for comprehensive court search, document verification, and legal data access services.
                        </p>
                    </div>
                </div>

                {/* Right Form Section */}
                <div className="flex-1 flex items-center rounded-b-2xl lg:rounded-tr-2xl lg:rounded-br-2xl lg:rounded-bl-none bg-white justify-center p-4 lg:p-8">
                    <div className="w-full max-w-2xl">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">{serviceContent.title}</h2>
                            <p className="text-gray-600">{serviceContent.description}</p>
                        </div>

                        {/* Success/Error Message */}
                        {submitMessage && (
                            <div className={`mb-6 p-4 rounded-lg ${submitMessage.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {submitMessage}
                            </div>
                        )}

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="bg-white p-4 lg:p-8 space-y-6">
                            {/* Hidden input for service type */}
                            <input type="hidden" name="serviceType" value={serviceType} />

                            {/* Personal Information Section */}
                            <div>
                                <h3 className="text-lg font-semibold text-blue-600 mb-4">Your Personal Information</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter your full name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Country *
                                        </label>
                                        <input
                                            type="text"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter your country"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter your email address"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter your phone number"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Request Details Section */}
                            <div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Reason for Request *
                                    </label>
                                    <select
                                        name="reasonForRequest"
                                        value={formData.reasonForRequest}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    >
                                        <option value="">Select reason for request</option>
                                        <option value="background-check">Background Check</option>
                                        <option value="due-diligence">Due Diligence</option>
                                        <option value="legal-research">Legal Research</option>
                                        <option value="compliance">Compliance Verification</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label className="flex items-center space-x-3">
                                        <input
                                            type="checkbox"
                                            name="verificationDocuments"
                                            checked={formData.verificationDocuments}
                                            onChange={handleInputChange}
                                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        />
                                        <span className="text-sm text-gray-700">
                                            Verification of documents
                                        </span>
                                    </label>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Requested for document
                                    </label>
                                    <input
                                        type="text"
                                        name="requestedDocument"
                                        value={formData.requestedDocument}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Specify the document type"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Instructions
                                    </label>
                                    <textarea
                                        name="instructions"
                                        value={formData.instructions}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                        placeholder="Please provide any additional instructions or details for your request..."
                                    />
                                </div>
                            </div>

                            {/* File Upload Section */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Upload Supporting Documents
                                </label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                    <p className="text-sm text-gray-600 mb-2">Drag and drop your files here</p>
                                    <p className="text-xs text-gray-500 mb-4">or click to browse files</p>
                                    <input
                                        type="file"
                                        multiple
                                        onChange={handleFileUpload}
                                        className="hidden"
                                        id="file-upload"
                                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                    />
                                    <label
                                        htmlFor="file-upload"
                                        className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors"
                                    >
                                        <Upload className="w-4 h-4 mr-2" />
                                        Browse Files
                                    </label>
                                </div>

                                {/* Uploaded Files List */}
                                {uploadedFiles.length > 0 && (
                                    <div className="mt-4">
                                        <h4 className="text-sm font-medium text-gray-700 mb-2">Uploaded Files:</h4>
                                        <div className="space-y-2">
                                            {uploadedFiles.map((file, index) => (
                                                <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                                                    <Check className="w-4 h-4 text-green-500" />
                                                    <span>{file.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Submit Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                                </button>
                                <button
                                    type="button"
                                    className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                >
                                    Save Draft
                                </button>
                            </div>
                        </form>

                        {/* Footer Note */}
                        <div className="text-center mt-6">
                            <p className="text-xs text-gray-500">
                                By submitting this form, you agree to our Terms & Conditions and Privacy Policy
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-50 border-t">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-600 text-sm text-center md:text-left">
                            © 2025 SVD Services. All Rights Reserved.
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                                Terms & Conditions
                            </a>
                            <span className="text-gray-400">•</span>
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <span className="text-gray-400">•</span>
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                                Sign Out
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default RequestForm; 