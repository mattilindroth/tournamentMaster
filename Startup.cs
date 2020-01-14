using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using Microsoft.Extensions.Logging;

namespace tournamentMaster
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddMvcCore(option => option.EnableEndpointRouting = false)
                .AddApiExplorer()
                .SetCompatibilityVersion(CompatibilityVersion.Version_3_0)
                ;
            
            //services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //app.UseHttpsRedirection();

            //app.UseRouting();

            app.UseCors(builder =>
                builder
                .WithOrigins("*")
                .AllowCredentials()
                .AllowAnyHeader()
                .AllowAnyMethod());

            //app.UseAuthorization();

            app.UseMvc();

            // app.UseEndpoints(endpoints =>
            // {
            //     endpoints.MapControllers();
            // });
        }
    }
}
