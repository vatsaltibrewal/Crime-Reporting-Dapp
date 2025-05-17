// SPDX-License-Identifier: MIT

pragma solidity ^0.8.12;

contract Report{
    address owner;
    uint number = 0;

    modifier isOwner(){
        require(msg.sender==owner,"Not Owner");
        _;
    }
    constructor(address _owner){
        owner = _owner;
    }

    struct report{
        uint SI;
        uint timestamp;
        string crimetype;
        string location;
        string severity;
        string message;
        address from;
        string remark;
    }
    report[] Reports;

    function viewReports() public view returns(report[] memory){
        return Reports;
    }

    function ReportCrime(string memory _crimetype, string memory _location, string memory _message, string memory _severity) public {
        Reports.push(report(number,block.timestamp,_crimetype,_location,_severity,_message,msg.sender,"Pending"));
        number++;
    }

    function approveByOwner(uint _number, string memory _remark) public isOwner{
        Reports[_number].remark = _remark;
    }
}