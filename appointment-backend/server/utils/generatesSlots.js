export const generateSlots = (start, end, duration) => {
  const slots = [];

  let startTime = new Date(`1970-01-01T${start}:00`);
  let endTime = new Date(`1970-01-01T${end}:00`);

  while (startTime < endTime) {
    const hours = startTime.getHours().toString().padStart(2, "0");
    const minutes = startTime.getMinutes().toString().padStart(2, "0");

    slots.push({
      time: `${hours}:${minutes}`,
      isBooked: false,
    });

    startTime.setMinutes(startTime.getMinutes() + duration);
  }

  return slots;
};
