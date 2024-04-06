// SPDX-License-Identifier: MIT

pragma solidity ^0.8.12;

contract Report{

    struct report{
        uint timestamp;
        string crimetype;
        string location;
        string severity;
        string message;
        address from;
        bool solved;
    }
    report[] Reports;

    function viewReports() public view returns(report[] memory){
        return Reports;
    }

    address[2] adminId = [0xd19C77555F21F7eaa48Dd820B60BDe55DC6985d9,0x1F9d23e204B56E4b0DD9091d2BAa2B691e67dc16];

    function LoginAsAdmin() public view returns(bool){
        for (uint i = 0; i < adminId.length; i++) {
            if (adminId[i] == msg.sender) {
                return true;
            }
        }
        return false;
    }

    modifier isPeople(){
        require(msg.sender != address(0),"Invalid Address");
        _;
    }

    function ReportCrime(string memory _crimetype, string memory _location, string memory _message, string memory _severity) public isPeople {
        Reports.push(report(block.timestamp,_crimetype,_location,_severity,_message,msg.sender,false));
    }
}
