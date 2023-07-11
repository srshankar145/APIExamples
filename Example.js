// Battery status API
// not working check properly
const batteryEl = document.getElementById("battery");
const getBatteryStatus = async () => {
  try {
    const Battery = await navigator.getBattery();
    console.log("battery status:", Battery);
  } catch {
    console.log(err);
  }
};
document.getElementById("battery").value = getBatteryStatus.value;
