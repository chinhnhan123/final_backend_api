const mongoose = require("mongoose");
const StageModel = require("../models/Stage");
const database = require("../connect");

const stage = [
  new StageModel({
    nameStage: "Giai đoạn ăn sữa",
    description:
      "Từ 0-3 tuần tuổi. Trong giai đoạn này, heo ăn sữa mẹ hoặc sữa thay thế và phát triển nhanh chóng.",
  }),
  new StageModel({
    nameStage: "Giai đoạn ăn đầu",
    description:
      "Từ 3-10 tuần tuổi. Trong giai đoạn này, heo sẽ chuyển từ ăn sữa sang ăn thức ăn rắn và bắt đầu phát triển các khả năng ăn và vận động.",
  }),
  new StageModel({
    nameStage: "Giai đoạn ăn thịt",
    description:
      "Từ 10 tuần trở lên: Trong giai đoạn này, heo sẽ tiếp tục phát triển và tăng trọng lượng với chế độ ăn uống chuyên biệt. Ở giai đoạn này, heo sẽ trưởng thành và sẵn sàng để thu hoạch để bán thịt.",
  }),
];

(async () => {
  await database.connectDatabase();
})();

stage.map(async (data, index) => {
  // eslint-disable-next-line no-unused-vars
  data.save((_err, result) => {
    if (index === stage.length) {
      // eslint-disable-next-line no-console
      console.log("DONE!");
      mongoose.disconnect();
    }
  });
});
