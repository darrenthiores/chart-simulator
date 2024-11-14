"use client";

import Chart from "chart.js/auto";
import { useEffect } from "react";
import adsJson from "../json/data.json";
import { Ads } from "@/model/ads";

export default function Home() {
  const ads = adsJson.ads.map((ad) => {
    return ad as Ads;
  });

  const data = {
    labels: ads.map((ad) => {
      return ad.ad_id;
    }),
    datasets: [
      {
        data: ads.map((ad) => {
          return Number(ad.impressions);
        }),
        label: "Impressions",
        borderColor: "rgb(62,149,205)",
        backgroundColor: "rgb(62,149,205,0.1)",
      },
      {
        data: ads.map((ad) => {
          return Number(ad.reach);
        }),
        label: "Reach",
        borderColor: "rgb(60,186,159)",
        backgroundColor: "rgb(60,186,159,0.1)",
      },
      {
        data: ads.map((ad) => {
          return Number(ad.spend);
        }),
        label: "Spend",
        borderColor: "rgb(255,165,0)",
        backgroundColor: "rgb(255,165,0,0.1)",
      },
      {
        data: ads.map((ad) => {
          return Number(ad.unique_clicks);
        }),
        label: "Unique Click",
        borderColor: "rgb(196,88,80)",
        backgroundColor: "rgb(196,88,80,0.1)",
      },
    ],
  };
  useEffect(() => {
    var ctx = document.getElementById("myChart") as HTMLCanvasElement;
    var myChart = new Chart(ctx, {
      type: "line",
      data: data,
    });
  }, []);

  return (
    <div className="w-1/2">
      <canvas id="myChart" className="w-full"></canvas>
    </div>
  );
}
