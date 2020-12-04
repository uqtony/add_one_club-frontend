import { ActivityDto } from "../component/activity";

export type DiscountApiDto = {
  peopleCount: number;
  percent: number;
};
export type ActivityApiDto = {
  id: number;
  code: string;
  imgUrl: string;
  videoUrl: string;
  description: string;
  start_at: number;
  end_at: number;
  price: number;
  discounts: DiscountApiDto[];
  finalPrice: number | null;
  status?: "not_started" | "start" | "end";
};

export function transfer(data: ActivityDto): ActivityApiDto {
  if (data.timeRange && data.timeRange.length === 2 && data.price) {
    return {
      id: data.id,
      code: data.code,
      imgUrl: data.imgUrl,
      videoUrl: data.videoUrl,
      description: data.description,
      start_at: Math.round(data.timeRange[0].valueOf() / 1000),
      end_at: Math.round(data.timeRange[1].valueOf() / 1000),
      price: data.price,
      discounts: data.discounts,
      finalPrice: data.finalPrice,
      status: data.status,
    };
  } else {
    throw new Error("data2APIData failed");
  }
}