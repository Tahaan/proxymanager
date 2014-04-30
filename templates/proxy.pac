function FindProxyForURL(url, host)
{

// If the IP address of the local machine is within a defined
// subnet, send to a specific proxy.  This will have th effect that when
// on, for example, the work network, the proxy setting will be used,
// and in all other locations a DIRECT connection will be used.

// Configure the below network address and network Mask to match your 
// requirements

if (isInNet(myIpAddress(), "172.18.0.0", "255.255.0.0"))
  return "PROXY PMHOSTTAG:PMPORTTAG";
else
  return "DIRECT";
} 
