"use client";

import Chart from "chart.js/auto";
import { useEffect } from "react";
import adsJson from "../json/data.json";
import { Ads, FbAds, FbAdsData } from "@/model/ads";

export default function Home() {
  const ads = adsJson.ads.map((ad) => {
    return ad as Ads;
  });

  const data = {
    labels: ads.map((ad) => {
      return ad.created_time;
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

  const data2 = {
    labels: ads.map((ad) => {
      return ad.created_time;
    }),
    datasets: [
      {
        data: ads.map((ad) => {
          return Number(ad.impressions);
        }),
        label: "Impressions",
        borderColor: "rgb(62,149,205)",
        backgroundColor: "rgb(62,149,205,0.1)",
      }
    ],
  };

  useEffect( () => {
    // This is the API CALL
    (async () => {
      const requestBody = JSON.stringify(
        {
          start_date : "2024-11-26",
          ad_account : "act_679651572413555"
        }
      )
      const fbData = await fetch(
        'http://127.0.0.1:8000/get-fb-campaign-daily/',
        {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: requestBody
        }
      )
      const responseJson: FbAdsData = await fbData.json()
      const response: FbAds[] = responseJson.data
      const fbChartData = {
        labels: response.map((ad) => {
          return ad.date;
        }),
        datasets: [
          {
            data: response.map((ad) => {
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

      var ctx = document.getElementById("myChart") as HTMLCanvasElement;
      var myChart = new Chart(ctx, {
        type: "line",
        data: fbChartData,
      });

      var ctx = document.getElementById("myChart-3") as HTMLCanvasElement;
      var myChart = new Chart(ctx, {
        type: "line",
        data: fbChartData,
      });
    })()

    var ctx = document.getElementById("myChart-2") as HTMLCanvasElement;
    var myChart = new Chart(ctx, {
      type: "line",
      data: data2,
    });
  }, []);

  return (
    <div className="w-1/2">
      <div className="flex flex-row">
        <canvas id="myChart" className="w-full"></canvas>
        <canvas id="myChart-3" className="w-full"></canvas>
      </div>
      <canvas id="myChart-2" className="w-full"></canvas>
    </div>
  );
}
