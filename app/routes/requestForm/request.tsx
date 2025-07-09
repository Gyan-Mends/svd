import { useState, useEffect } from 'react';
import { Upload, FileText, Check } from 'lucide-react';
import heroImage from '~/components/images/image1.avif';

const RequestForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        country: '',
        email: '',
        phoneNumber: '',
        comments: ''
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
                    sidebarContent: 'Your trusted partner for comprehensive searches at all the courts across the country.'
                };
            case 'document-request':
                return {
                    title: 'Request for Court Documents',
                    description: 'Fill out the form below to request court documents',
                    sidebarContent: 'Your trusted partner for reliable document retrieval across the country.'
                };
            case 'document-verification':
                return {
                    title: 'Verify Court Documents',
                    description: 'Fill out the form below to verify court documents',
                    sidebarContent: 'Your trusted partner for extensive verification of  documents across the country.'
                };
            default:
                return {
                    title: 'Request Court Search',
                    description: 'Fill out the form below to request court searches',
                    sidebarContent: 'Your trusted partner for comprehensive searches at all the courts across the country.'
                };
        }
    };

    const serviceContent = getServiceContent();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const maxFileSize = 10 * 1024 * 1024; // 10MB limit
            const allowedTypes = [
                'application/pdf',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'image/jpeg',
                'image/jpg',
                'image/png',
                'text/plain'
            ];

            const validFiles: File[] = [];
            const errors: string[] = [];

            Array.from(files).forEach(file => {
                if (file.size > maxFileSize) {
                    errors.push(`${file.name} is too large (max 10MB)`);
                } else if (!allowedTypes.includes(file.type)) {
                    errors.push(`${file.name} is not a supported file type`);
                } else {
                    validFiles.push(file);
                }
            });

            if (errors.length > 0) {
                setSubmitMessage('File upload errors:\n' + errors.join('\n'));
            } else {
                setSubmitMessage(''); // Clear any previous error messages
            }

            if (validFiles.length > 0) {
                setUploadedFiles(prev => [...prev, ...validFiles]);
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            // Convert files to base64 for sending to API
            const convertFilesToBase64 = async (files: File[]) => {
                const filePromises = files.map(file => {
                    return new Promise<{ name: string, content: string, contentType: string }>((resolve, reject) => {
                        const reader = new FileReader();
                        reader.onload = () => {
                            const base64String = reader.result as string;
                            // Remove the data:mime/type;base64, prefix
                            const base64Content = base64String.split(',')[1];
                            resolve({
                                name: file.name,
                                content: base64Content,
                                contentType: file.type
                            });
                        };
                        reader.onerror = reject;
                        reader.readAsDataURL(file);
                    });
                });
                return Promise.all(filePromises);
            };

            // Convert uploaded files to base64
            const attachments = uploadedFiles.length > 0 ? await convertFilesToBase64(uploadedFiles) : [];

            // Prepare data for API
            const emailData = {
                ...formData,
                serviceType,
                fileCount: uploadedFiles.length,
                attachments: attachments
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
                    comments: ''
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

    const removeFile = (index: number) => {
        setUploadedFiles(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Background - Full Width */}
            <div style={{ backgroundImage: `url(${heroImage})` }} className="bg-cover bg-center bg-no-repeat py-4 w-full h-[80vh] absolute top-0 left-0 right-0">
            </div>

            <div className="flex flex-col lg:flex-row px-4 pb-20 lg:px-60 relative z-10 mt-20 lg:mt-40 max-w-full overflow-hidden">
                {/* Left Sidebar */}
                <div className="w-full lg:w-1/3 bg-gradient-to-br rounded-t-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-tr-none from-blue-400 to-blue-600 flex items-center justify-center py-8 lg:py-0">
                    <div className="text-center text-white px-8">
                        <div className="mb-8">
                            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileText className="w-10 h-10 text-white" />
                            </div>
                        </div>
                                <h1 className="text-2xl lg:text-3xl font-bold font-heading mb-4">
                                Welcome to<br />
                                <span className="text-3xl lg:text-4xl">SVD Services</span>
                            </h1>
                        <p className="text-blue-100 text-base lg:text-lg leading-relaxed">
                            {serviceContent.sidebarContent}
                        </p>
                    </div>
                </div>

                {/* Right Form Section */}
                <div className="flex-1 flex items-center rounded-b-2xl lg:rounded-tr-2xl lg:rounded-br-2xl lg:rounded-bl-none bg-white justify-center p-4 lg:p-8 min-w-0">
                    <div className="w-full max-w-2xl">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold font-heading text-gray-800 mb-2">{serviceContent.title}</h2>
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
                                <h3 className="text-lg font-semibold font-heading text-blue-600 mb-4">Your Personal Information</h3>

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
                                            Country
                                        </label>
                                        <input
                                            type="text"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter your country"
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
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Comments Section */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Comments
                                </label>
                                <textarea
                                    name="comments"
                                    value={formData.comments}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                    placeholder="Please provide any additional comments or details for your request..."
                                />
                            </div>

                            {/* File Upload Section - Only show for document-verification */}
                            {serviceType === 'document-verification' && (
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
                                                    <div key={index} className="flex items-center justify-between space-x-2 text-sm text-gray-600 bg-gray-50 p-2 rounded">
                                                        <div className="flex items-center space-x-2 min-w-0">
                                                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                            <span className="truncate">{file.name}</span>
                                                            <span className="text-xs text-gray-400 flex-shrink-0">
                                                                ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                                            </span>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            onClick={() => removeFile(index)}
                                                            className="text-red-500 hover:text-red-700 text-xs ml-2 flex-shrink-0"
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="text-xs text-gray-500 mt-2">
                                                Supported formats: PDF, DOC, DOCX, JPG, PNG, TXT (Max 10MB each)
                                            </p>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="pt-6">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                                </button>
                            </div>
                        </form>

                        {/* Footer Note */}
                        <div className="text-center mt-6">
                            <p className="text-xs text-gray-500">
                                By submitting this form, you agree to our <a href="/terms-of-service" className="text-blue-600 hover:text-blue-800 underline">Terms of Service</a> and <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default RequestForm; 