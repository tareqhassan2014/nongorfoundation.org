import React from 'react';

const Structure = () => {
    return (
        <div>
            <div className="text-white bg-green-700">
                <h2 className="text-center py-3 text-2xl font-semibold">Structure of The Organization</h2>
            </div>
            <div className='max-w-6xl mx-auto px-3 py-10'>
                <p>
                    Nongor Foundation is a private voluntary organization and will have three councils in its
                    organizational structure for the smooth and fair management of its functions:
                </p>
                <ol className='grid grid-cols-1 list-[upper-roman] list-inside pt-2 font-bold text-green-700'>
                    <li>General Council,</li>
                    <li>Executive Council, and</li>
                    <li>Advisory Council</li>
                </ol>
                <ol className='list-[upper-roman] list-inside pt-8'>
                    <li className='font-bold text-green-700 text-lg'>General Council:</li>
                    <p>This council will consist of general members and life members. This council will approve
                        the annual budget, review the annual audit report, amend the constitution, and resolve
                        other complex issues. The session of this council will be held once a year. But it
                        can be done more than once for special needs.
                    </p>
                    <ol className='list-[upper-number] list-inside pt-2 pl-3 font-semibold'>
                        <li>The number of members of the General Assembly shall be a minimum of 23 members. The number
                            of members can be increased if necessary.
                        </li>
                        <li> There should be women members in the General Assembly.</li>
                        <li>Members of the General Assembly must be of sound mind and at least 18 years of age. Members
                            must have experience in community developmentand an interest in
                            serving on the highest council in solidarity with the philosophy of the organization.
                        </li>
                    </ol>
                    <li className='pt-8 font-bold text-green-700 text-lg'>Executive Council:</li>
                    <p>The Executive Council of the Foundation will consist of 07 (seven) persons elected or nominated
                        from among the members of the General Assembly. The elected members will serve as executive members
                        for 02 (two) years.The organizational structure of the Executive Council is as follows:
                    </p>
                    <p>Sequential designation comments-</p>
                    <ol className='list-[upper-number] list-inside pt-2 pl-3 font-semibold'>
                        <li>president</li>
                        <li>Vice-Presidents</li>
                        <li>General Secretary</li>
                        <li>Joint General Secretary</li>
                        <li>Treasurer</li>
                        <li>executive members:</li>
                        <ol className='list-disc list-inside pt-2 pl-3'>
                            <li>
                                The Executive Council shall be elected for 2 years by voting or nomination of the members of the General Council.
                            </li>
                            <li>
                                The newly elected executive council shall assume responsibility within 15 (fifteen) days after the election.
                            </li>
                        </ol>
                    </ol>
                    <li className='pt-8 font-bold text-green-700 text-lg'>Advisory Council:</li>
                    <p>This council of the foundation will have an advisory council consisting of 07 (seven) members. Advisors will provide
                        sound advice and support for successfully implementing various developmental activities undertaken by the organization.
                        An advisory council will be constituted of educationists (past/present), doctors, bankers, imams/alems, government
                        officials (past/present), eminent businessmen, lawyers, and ex-members/chairmen/dignitaries of the respective areas.
                    </p>
                </ol>
            </div>
        </div>
    );
};

export default Structure;