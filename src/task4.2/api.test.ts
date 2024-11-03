import { Api } from "./api";

const SPECIAL_DATE = "tomorrow";
const RECOMMENDED_DATE = "in the near future...";

const mockSuccessResponse: Api = () => {
  return Promise.resolve({
    status: "success",
    data: {
      id: 0,
      dateEvent: SPECIAL_DATE,
      dateRequested: "today",
      guestsCount: 2,
      options: []
    }
  });
};
const mockErrorResponse: Api = () => {
  return Promise.resolve({
    status: "error",
    error: "covid-19",
    data: {
      dateEvent: RECOMMENDED_DATE
    }
  });
};

describe("Пример использования системы типов", async () => {
  it("Производит дискриминацию по типу результата", async () => {
    const result = await mockErrorResponse({
      dateEvent: "yesterday"
    });
    if (result.status === "error") {
      expect(result.data.dateEvent).toBe(RECOMMENDED_DATE);
      return;
    }
    fail();
  });
  it("Показывает как работать с успешным результатом", async () => {
    const result = await mockSuccessResponse({
      dateEvent: "tomorrow",
      guestsCount: 2
    });
    if (result.status === "success") {
      expect(result.data.dateEvent).toBe(SPECIAL_DATE);
      return;
    }
    fail();
  });
});
