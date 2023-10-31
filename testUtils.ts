export const mockDate = () => {
  const mockedDate = new Date("2022-10-26T00:00:00.000Z");
  jest.spyOn(global, "Date").mockImplementation(() => mockedDate);
  global.Date.now = jest.fn().mockReturnValue(mockedDate.valueOf());
};
