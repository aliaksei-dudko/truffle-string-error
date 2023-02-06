package org.example;

import java.util.HashMap;

import org.graalvm.polyglot.HostAccess;
import org.graalvm.polyglot.proxy.ProxyObject;

public class HostObject {

	@HostAccess.Export
	public ProxyObject getVehicleData() throws Exception {
		var carData = new HashMap<String, Object>();
		carData.put("costs", 10000);
		carData.put("wheels", 17);
		carData.put("damaged", false);
		return ProxyObject.fromMap(carData);
	}

	@HostAccess.Export
	public ProxyObject getColorAsString() throws Exception {
		var data = new HashMap<String, Object>();
		data.put("color", "red");
		return ProxyObject.fromMap(data);
	}


}
