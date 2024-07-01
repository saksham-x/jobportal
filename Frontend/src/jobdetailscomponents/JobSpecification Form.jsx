import React, { useState } from 'react';

const JobSpecification = () => {
    const [qualification, setQualification] = useState('Not Available');
    const [keySkills, setKeySkills] = useState([]);
    const [preferredAgeRange, setPreferredAgeRange] = useState('Not Available');
    const [preferredGender, setPreferredGender] = useState('Female');
    const [coverLetterRequired, setCoverLetterRequired] = useState(false);
    const [functionalArea, setFunctionalArea] = useState('Other');

    // Handle key skills selection
    const handleKeySkillsChange = (selectedSkills) => {
        setKeySkills(selectedSkills);
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Job Application Form</h2>
            <div className="mb-4">
                <label className="block font-medium">Qualification Required</label>
                <select
                    className="w-full p-2 border rounded"
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                >
                    <option value="Not Available">Not Available</option>
                    {/* Add other qualification options here */}
                </select>
            </div>
            <div className="mb-4">
                <label className="block font-medium">Key Skills</label>
                <div className="space-y-2">
                    {/* Replace with checkboxes or other UI for key skills */}
                    {/* Example: */}
                    <label>
                        <input
                            type="checkbox"
                            value="Creativity"
                            onChange={(e) => handleKeySkillsChange(e.target.value)}
                        />
                        Creativity
                    </label>
                    {/* Add other key skills options here */}
                </div>
            </div>
            <div className="mb-4">
                <label className="block font-medium">Preferred Age Range</label>
                <select
                    className="w-full p-2 border rounded"
                    value={preferredAgeRange}
                    onChange={(e) => setPreferredAgeRange(e.target.value)}
                >
                    <option value="Not Available">Not Available</option>
                    {/* Add other age range options here */}
                </select>
            </div>
            <div className="mb-4">
                <label className="block font-medium">Preferred Gender</label>
                <select
                    className="w-full p-2 border rounded"
                    value={preferredGender}
                    onChange={(e) => setPreferredGender(e.target.value)}
                >
                    <option value="Female">Female</option>
                    {/* Add other gender options here */}
                </select>
            </div>
            <div className="mb-4">
                <label className="block font-medium">Cover Letter</label>
                <input
                    type="checkbox"
                    checked={coverLetterRequired}
                    onChange={() => setCoverLetterRequired(!coverLetterRequired)}
                />
                <span className="ml-2">Required</span>
            </div>
            <div className="mb-4">
                <label className="block font-medium">Functional Area</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={functionalArea}
                    onChange={(e) => setFunctionalArea(e.target.value)}
                />
            </div>
            {/* Add form submission logic here */}
        </div>
    );
};

export default JobSpecification;
